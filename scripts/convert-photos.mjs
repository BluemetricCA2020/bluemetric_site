import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const teamDir = path.join(__dirname, '..', 'public', 'images', 'team')

const files = fs.readdirSync(teamDir).filter(f => f.endsWith('.jpg'))

for (const file of files) {
  const name = path.basename(file, '.jpg')
  const input = path.join(teamDir, file)
  const output = path.join(teamDir, `${name}.webp`)

  await sharp(input)
    .resize(600, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(output)

  const before = fs.statSync(path.join(teamDir, file)).size
  const after = fs.statSync(output).size
  console.log(`${file}: ${Math.round(before/1024)}KB JPG → ${Math.round(after/1024)}KB WebP`)
}

console.log(`\nKlaar — ${files.length} bestanden geconverteerd naar 600px × 85% WebP.`)
