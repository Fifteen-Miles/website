#!/usr/bin/env node
/*
 Simple image optimizer using sharp.
 Scans `public/` for .png/.jpg/.jpeg files and outputs responsive WebP/AVIF files into `public/optimized/`.
 Produces a manifest `public/optimized/manifest.json` mapping original -> srcset entries.

 Note: `sharp` must be installed (optionalDependency). Run `npm install` if needed.
*/
import fs from 'fs';
import path from 'path';

async function main(){
  let sharp;
  try{
    sharp = (await import('sharp')).default;
  }catch(e){
    console.error('sharp is not installed. Run `npm install --save-dev sharp` and re-run this script. Skipping image optimization.');
    process.exit(0);
  }

  const publicDir = path.resolve(process.cwd(), 'public');
  const outDir = path.join(publicDir, 'optimized');
  if(!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const exts = ['.png','.jpg','.jpeg'];
  const files = fs.readdirSync(publicDir).filter(f=> exts.includes(path.extname(f).toLowerCase()));
  const widths = [320,640,960,1280,1920];
  const manifest = {};

  for(const file of files){
    const name = path.parse(file).name;
    const inPath = path.join(publicDir, file);
    manifest[file] = { webp: [], avif: [] };
    for(const w of widths){
      const outWebp = `${name}-${w}.webp`;
      const outAvif = `${name}-${w}.avif`;
      const outWebpPath = path.join(outDir, outWebp);
      const outAvifPath = path.join(outDir, outAvif);
      try{
        await sharp(inPath).resize({ width: w }).toFormat('webp', {quality: 85}).toFile(outWebpPath);
        await sharp(inPath).resize({ width: w }).toFormat('avif', {quality: 50}).toFile(outAvifPath);
        manifest[file].webp.push(`/optimized/${outWebp} ${w}w`);
        manifest[file].avif.push(`/optimized/${outAvif} ${w}w`);
        console.log(`generated: ${outWebp}, ${outAvif}`);
      }catch(err){
        console.warn('failed to process', file, w, err.message || err);
      }
    }
  }

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Image optimization complete. Manifest at public/optimized/manifest.json');
}

main().catch(err=>{ console.error(err); process.exit(1); });
