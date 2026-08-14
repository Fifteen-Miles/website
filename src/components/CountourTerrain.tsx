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
uniform vec2 uMouse;
uniform float uMouseAmt;

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
  vec2 p = uv * vec2(1.0, uRes.y / uRes.x);

  float t = uTime * 0.035;

  vec2 flow = vec2(
    fbm(p * 1.4 + vec2(0.0, t)),
    fbm(p * 1.4 + vec2(31.7, -t))
  );

  float elevation = fbm(p * 1.6 + flow * 0.7);

  vec2 diff = (uv - vec2(uMouse.x * 0.5 + 0.5, uMouse.y * 0.5 + 0.5)) * vec2(1.0, uRes.y / uRes.x);
  float dist = length(diff);
  float ripple = sin(dist * 26.0 - uTime * 1.6) * exp(-dist * 4.5) * 0.035 * uMouseAmt;
  elevation += ripple;

  vec2 mOff = (uMouse - vec2(0.0, 0.15)) * 0.22 * uMouseAmt;
  elevation += (mOff.x * 0.5 + mOff.y * 0.5) * fbm(p * 3.2);

  float lines = 22.0;
  float e = fract(elevation * lines);
  float f = min(e, 1.0 - e);
  float major = smoothstep(0.0, 0.012, f);
  float e2 = fract(elevation * lines * 2.0);
  float f2 = min(e2, 1.0 - e2);
  float minor = smoothstep(0.0, 0.008, f2);
  float ink = max(major * 0.34, minor * 0.10);

  float vign = smoothstep(1.8, 0.35, length((uv - 0.5) * vec2(1.0, uRes.y / uRes.x)));
  ink *= 0.5 + 0.5 * vign;

  float fadeT = smoothstep(0.0, 1.5, uTime);
  ink *= fadeT;

  vec3 bg = vec3(0.016, 0.018, 0.022);
  vec3 brass = vec3(0.92, 0.82, 0.55);
  vec3 lineCol = vec3(0.92, 0.94, 0.97);
  vec3 col = bg * (1.0 - ink) + mix(lineCol, brass, major * 0.55) * ink;
  col = mix(col, vec3(0.009, 0.010, 0.013), 0.45 * (1.0 - vign));

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader {
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
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false }) ??
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
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uMouse = gl.getUniformLocation(prog, "uMouse");
    const uMouseAmt = gl.getUniformLocation(prog, "uMouseAmt");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

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

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
