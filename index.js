let myNameInCode = '1820042482489711754248401986652975001409845489712902587873267932511847516554467217817730108763039139750753665282315499456063997278823832794383241674077';

let pairCounts = {};

for (let i = 0; i < myNameInCode.length - 1; i++) {
  const pair = myNameInCode.substring(i, i + 2);
  pairCounts[pair] = (pairCounts[pair] || 0) + 1;
}

let maxCount = 0;

console.log('[Dazniausiai pasikartojancios skaitmenu poros]:');
