import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.resolve(__dirname, '..', 'dist')
const srcIndex = path.join(distDir, 'index.html')
const targetDir = path.join(distDir, 'apply')
const targetIndex = path.join(targetDir, 'index.html')

if (!fs.existsSync(distDir)) {
  console.error('dist directory not found — run build first')
  process.exitCode = 1
} else {
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir)
  fs.copyFileSync(srcIndex, targetIndex)
  console.log(`Copied ${srcIndex} -> ${targetIndex}`)
}
