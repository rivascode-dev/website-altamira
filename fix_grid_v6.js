const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/<Grid\s+([^>]+)>/g, (match, d1) => {
    if (!d1.includes('item') && !/\b(xs|sm|md|lg|xl)=\{/.test(d1) && !/\b(xs|sm|md|lg|xl)=/.test(d1)) {
       return match;
    }
    
    let isSelfClosing = d1.endsWith('/');
    if (isSelfClosing) {
      d1 = d1.slice(0, -1);
    }

    let newD1 = d1.replace(/\bitem\b/g, ' ');
    
    const sizeMap = [];
    newD1 = newD1.replace(/\b(xs|sm|md|lg|xl)=\{(.+?)\}/g, (m, key, val) => {
      sizeMap.push(key + ': ' + val);
      return '';
    });
    newD1 = newD1.replace(/\b(xs|sm|md|lg|xl)="(.+?)"/g, (m, key, val) => {
      sizeMap.push(key + ': ' + (isNaN(Number(val)) ? "'" + val + "'" : val));
      return '';
    });

    newD1 = newD1.replace(/\s+/g, ' ').trim();

    if (sizeMap.length > 0) {
      newD1 += ' size={{ ' + sizeMap.join(', ') + ' }}';
    }
    
    if (isSelfClosing) {
        newD1 += ' /';
    }
    
    return '<Grid ' + newD1 + '>';
  });

  fs.writeFileSync(file, content);
}
console.log('Done');
