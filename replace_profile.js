const fs = require('fs');
const file = 'src/components/ui/styles/ProfileCard.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/39,\s*203,\s*203/g, '133, 196, 185');
content = content.replace(/38,\s*216,\s*104/g, '161, 181, 108');
content = content.replace(/128,\s*151,\s*143/g, '141, 163, 153');

content = content.replace(/#27CBCB/gi, '#8c9190ff');
content = content.replace(/#26D868/gi, '#ef0a06ff');
content = content.replace(/#80978F/gi, '#000000ff');

content = content.replace(/hsl\(182,\s*80%,\s*65%\)/g, 'hsl(165, 40%, 55%)');
content = content.replace(/hsl\(142,\s*70%,\s*60%\)/g, 'hsl(75, 35%, 65%)');
content = content.replace(/hsl\(155,\s*25%,\s*55%\)/g, 'hsl(153, 11%, 60%)');

content = content.replace(/'SF Mono',\s*'Monaco',\s*'Inconsolata',\s*monospace/g, "'Outfit', sans-serif");
content = content.replace(/font-family:\s*monospace/g, "font-family: 'Inter', sans-serif");

fs.writeFileSync(file, content);
console.log('Replacements completed successfully');
