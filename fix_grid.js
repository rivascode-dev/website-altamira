const fs = require('fs');
const path = require('path');

const dir = 'src/sections/home';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/Grid2/g, 'Grid');
  content = content.replace(/size=\{\{\s*([^}]+)\s*\}\}/g, (match, inner) => {
    const parts = inner.split(',').map(p => p.trim());
    const props = parts.map(p => {
      const [key, value] = p.split(':').map(str => str.trim());
      return key + '={' + value + '}';
    }).join(' ');
    
    return 'item ' + props;
  });

  fs.writeFileSync(filePath, content);
}
