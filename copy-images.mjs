import { copyFileSync, readdirSync, statSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = 'C:\\Users\\Eslam M.Salah\\Desktop\\matrial';
const dstDir = join(__dirname, 'public', 'images');

// Create destination directory
mkdirSync(dstDir, { recursive: true });
console.log('✓ Created directory:', dstDir);

// Copy all files
const files = readdirSync(srcDir);
let copiedCount = 0;

for (const file of files) {
  const srcPath = join(srcDir, file);
  const dstPath = join(dstDir, file);
  
  if (statSync(srcPath).isFile()) {
    copyFileSync(srcPath, dstPath);
    console.log('✓ Copied:', file);
    copiedCount++;
  }
}

console.log(`\n✅ Successfully copied ${copiedCount} files!`);
console.log('You can now run: npm run dev');
