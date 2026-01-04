/* eslint-env node */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Dossiers source et destination
const inputDir = path.join(__dirname, '../frontend/src/assets');
const outputDir = path.join(__dirname, '../frontend/src/assets/optimized');

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Formats à optimiser
const formats = ['.jpg', '.jpeg', '.png', '.webp'];

// Fonction de compression
async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      
      // Vérifier si c'est une image
      if (!formats.includes(ext)) continue;
      
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      
      console.log(`📸 Compression de ${file}...`);
      
      await sharp(inputPath)
        .webp({ quality: 80 }) // Qualité 80% (bon compromis)
        .toFile(outputPath.replace(ext, '.webp'));
      
      // Afficher la réduction de taille
      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath.replace(ext, '.webp')).size;
      const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);
      
      console.log(`✅ ${file} : ${(inputSize/1024).toFixed(0)} KB → ${(outputSize/1024).toFixed(0)} KB (-${reduction}%)`);
    }
    
    console.log('\n🎉 Toutes les images ont été optimisées !');
    console.log(`📂 Images optimisées dans : ${outputDir}`);
    
  } catch (error) {
    console.error('❌ Erreur :', error);
  }
}

optimizeImages();