const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, 'docx_unzipped', 'word', 'document.xml');
if (fs.existsSync(xmlPath)) {
  const xml = fs.readFileSync(xmlPath, 'utf8');
  const matches = xml.match(/<w:t[^>]*>(.*?)<\/w:t>/g) || [];
  const text = matches.map(m => m.replace(/<[^>]+>/g, '')).join(' ');
  console.log('--- CV TEXT START ---');
  console.log(text);
  console.log('--- CV TEXT END ---');
  fs.writeFileSync(path.join(__dirname, 'cvTextFormatted.txt'), text, 'utf8');
} else {
  console.log('xmlPath not found:', xmlPath);
}
