"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;     // NDC, -1..1
uniform float uMouseAmt; // 0..1 presence (eases in/out on hover)

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot * p * 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float aspect = uRes.x / uRes.y;
  float t = uTime * 0.05;

  // --- Pseudo-perspective ground plane ---------------------------------
  // uv.y = 0 -> near the camera (bottom of screen)
  // uv.y = 1 -> horizon (top of screen)
  // "persp" grows toward the bottom, so the world-space grid stretches
  // near camera and compresses toward the horizon, exactly like flying
  // low over terrain.
  float persp = 1.0 / (uv.y * 1.35 + 0.22);

  vec2 mouseParallax = uMouse * uMouseAmt;
  float ndcX = (uv.x - 0.5) * aspect;

  vec2 world = vec2(
    ndcX * persp * 0.9 + mouseParallax.x * persp * 0.14,
    persp * 1.15 - t * 6.0 + mouseParallax.y * persp * 0.08
  ) * 0.55;

  // --- Heightfield + relief normal (forward difference, cheap) ---------
  float eps = clamp(0.9 / max(persp, 0.6), 0.015, 0.14);
  float h0 = fbm(world);
  float hR = fbm(world + vec2(eps, 0.0));
  float hU = fbm(world + vec2(0.0, eps));
  vec3 normal = normalize(vec3(h0 - hR, h0 - hU, eps * 1.6));

  vec3 lightDir = normalize(vec3(0.35, 0.55, 0.72));
  float diffuse = max(dot(normal, lightDir), 0.0);
  float hillshade = 0.22 + diffuse * 1.05;

  // --- Contour bands, line width eased for distance (anti-moiré) -------
  float linesFreq = 15.0;
  float e = fract(h0 * linesFreq);
  float f = min(e, 1.0 - e);
  float aa = mix(0.010, 0.05, smoothstep(0.15, 0.85, uv.y));
  float major = 1.0 - smoothstep(0.0, aa, f);

  float e2 = fract(h0 * linesFreq * 2.0);
  float f2 = min(e2, 1.0 - e2);
  float minor = 1.0 - smoothstep(0.0, aa * 0.7, f2);

  float ink = max(major * 0.42, minor * 0.12);
  ink *= clamp(hillshade, 0.18, 1.4);

  // --- Palette -----------------------------------------------------------
  vec3 bg = vec3(0.016, 0.018, 0.022);
  vec3 lineCol = vec3(0.93, 0.95, 0.98);
  vec3 brass = vec3(0.92, 0.82, 0.55);

  float ridge = smoothstep(0.5, 0.85, h0);
  vec3 tone = mix(lineCol, brass, clamp(diffuse * 0.85 + ridge * 0.35, 0.0, 1.0));

  vec3 col = mix(bg, tone, ink);

  // Horizon fog: fades the relief into the background near the top
  float fog = smoothstep(0.55, 1.0, uv.y);
  col = mix(col, bg, fog * 0.85);

  // Thin brass glow marking the horizon line
  float horizonGlow = exp(-pow((uv.y - 0.6) * 15.0, 2.0)) * 0.05;
  col += brass * horizonGlow;

  // Soft interactive spotlight following the cursor
  vec2 mUv = uMouse * 0.5 + 0.5;
  float distScreen = length(uv - mUv);
  float spotlight = exp(-distScreen * distScreen * 16.0) * uMouseAmt * 0.10;
  col += brass * spotlight;

  // Vignette + entrance fade
  vec2 vp = (uv - 0.5) * vec2(aspect, 1.0);
  float vign = smoothstep(1.7, 0.3, length(vp));
  col = mix(bg, col, 0.55 + 0.45 * vign);
  col *= smoothstep(0.0, 1.6, uTime);

  gl_FragColor = vec4(col, 1.0);
}
`;

type GLContext = WebGLRenderingContext | WebGL2RenderingContext;

function compile(gl: GLContext, type: number, src: string): WebGLShader {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error(`Shader compile failed: ${log}`);
  }
  return sh;
}

export function ContourTerrain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const gl: GLContext | null =
      canvas.getContext("webgl", { antialias: false, alpha: false }) ??
      canvas.getContext("webgl2", { antialias: false, alpha: false });
    if (!gl) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uMouse = gl.getUniformLocation(prog, "uMouse");
    const uMouseAmt = gl.getUniformLocation(prog, "uMouseAmt");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const target = { x: 0, y: 0, amt: 0 };
    const cur = { x: 0, y: 0, amt: 0 };

    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = 1 - (e.clientY / window.innerHeight) * 2;
      target.amt = 1;
    };
    const onLeave = () => {
      target.amt = 0;
    };

    let raf = 0;
    let running = true;
    const start = performance.now();

    const render = () => {
      if (!running) return;
      const now = (performance.now() - start) / 1000;
      cur.x += (target.x - cur.x) * (reduced ? 1 : 0.045);
      cur.y += (target.y - cur.y) * (reduced ? 1 : 0.045);
      cur.amt += (target.amt - cur.amt) * (reduced ? 1 : 0.03);

      gl.uniform1f(uTime, reduced ? 0 : now);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, cur.x, cur.y);
      gl.uniform1f(uMouseAmt, cur.amt);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", resize);
    render();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}