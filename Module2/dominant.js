import SCRIPTS from './scripts.js';

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  // Your code here.
  let counts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  });
// let counts = countBy(text, char => {
//   return characterScript(char.codePointAt(0) || {direction: ""})
// })
  // ignore "none"
  counts = counts.filter(({name}) => name != "none");

  // if nothing found
  if (counts.length == 0) return "ltr";

  // find the direction with largest count
  return counts.reduce((a, b) => a.count > b.count ? a : b).name;


}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl