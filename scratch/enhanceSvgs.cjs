const fs = require('fs');
const path = require('path');

const animalDataPath = path.join(__dirname, '..', 'src', 'data', 'animalData.ts');
let content = fs.readFileSync(animalDataPath, 'utf8');

// Function to process each <svg ...> tag
const updatedContent = content.replace(/<svg\s+([^>]+)>/g, (match, attrs) => {
  let newAttrs = attrs;
  
  if (!newAttrs.includes('width=')) {
    newAttrs += ' width="1600"';
  } else {
    newAttrs = newAttrs.replace(/width="[^"]*"/, 'width="1600"');
  }
  
  if (!newAttrs.includes('height=')) {
    newAttrs += ' height="1600"';
  } else {
    newAttrs = newAttrs.replace(/height="[^"]*"/, 'height="1600"');
  }
  
  if (!newAttrs.includes('shape-rendering')) {
    newAttrs += ' shape-rendering="geometricPrecision"';
  }
  
  if (!newAttrs.includes('text-rendering')) {
    newAttrs += ' text-rendering="geometricPrecision"';
  }
  
  if (!newAttrs.includes('image-rendering')) {
    newAttrs += ' image-rendering="optimizeQuality"';
  }

  return '<svg ' + newAttrs + '>';
});

fs.writeFileSync(animalDataPath, updatedContent, 'utf8');
console.log('Successfully updated animalData.ts with HD vector attributes (width=1600, height=1600, shape-rendering=geometricPrecision).');
