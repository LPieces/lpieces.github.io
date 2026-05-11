import fs from 'fs-extra'

async function run() {
  await fs.copy('public/assets/fonts', 'dist/assets/fonts', { overwrite: true })
  await fs.copy('CNAME', 'dist/CNAME', { overwrite: true })
}

run()
