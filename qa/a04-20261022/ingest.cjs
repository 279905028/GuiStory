const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('../../deployment/cloudflare/node_modules/sharp');
const root = path.resolve(__dirname, '../..');
const dir = path.join(root, 'assets/ten-chapter/backgrounds');
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
(async () => {
  const [id, original] = process.argv.slice(2);
  if (!/^[a-z0-9-]+$/.test(id) || !original) throw Error('id and source required');
  const source = path.join(dir, 'sources', `bg-${id}.png`);
  const output = path.join(dir, `bg-${id}.webp`);
  fs.mkdirSync(path.dirname(source), {recursive:true});
  if (fs.existsSync(source) && hash(fs.readFileSync(source)) !== hash(fs.readFileSync(original))) throw Error('Refusing source overwrite');
  fs.copyFileSync(original, source);
  await sharp(source).webp({lossless:true, effort:6}).toFile(output);
  const a = await sharp(source).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const b = await sharp(output).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  if (!a.data.equals(b.data)) throw Error('Decoded pixel mismatch');
  const m = await sharp(output).metadata();
  const record = {id:`tc-bg-${id}`, generator:'built-in image_gen', originalPath:original,
    sourcePath:path.relative(root,source), file:path.relative(root,output), width:m.width,height:m.height,
    format:m.format,hasAlpha:m.hasAlpha, encoding:{lossless:true,effort:6}, decodedPixelsEqual:true,
    sourceSha256:hash(fs.readFileSync(source)),sha256:hash(fs.readFileSync(output)),bytes:fs.statSync(output).size};
  fs.mkdirSync(path.join(__dirname,'records'),{recursive:true});
  fs.writeFileSync(path.join(__dirname,'records',`${id}.json`),JSON.stringify(record,null,2)+'\n');
  console.log(JSON.stringify(record));
})().catch(e=>{console.error(e);process.exit(1)});
