const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = '/Users/yogipatel/Downloads/Sequnce';
const outputDir = '/Users/yogipatel/Downloads/nilkanth-portfolio/public/sequence';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, async (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    process.exit(1);
  }

  // Filter PNG files and sort them
  const pngFiles = files.filter(f => f.endsWith('.png')).sort();
  console.log(`Found ${pngFiles.length} PNG files. Converting to WebP...`);

  for (let i = 0; i < pngFiles.length; i++) {
    const file = pngFiles[i];
    
    // Check if filename matches format frame_XX_delay-0.066s.png
    const match = file.match(/frame_(\d+)_delay-0\.066s\.png/);
    if (!match) {
      console.log(`Skipping file that does not match pattern: ${file}`);
      continue;
    }
    
    const frameNum = match[1];
    // Rename to use 0.067s as expected by ScrollyCanvas
    const outName = `frame_${frameNum}_delay-0.067s.webp`;
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, outName);

    try {
      // Convert to WebP and resize to 1920px width (keeping aspect ratio)
      await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Converted (${i + 1}/${pngFiles.length}): ${file} -> ${outName}`);
    } catch (e) {
      console.error(`Failed to convert ${file}:`, e);
    }
  }
  console.log('Conversion complete!');
});
