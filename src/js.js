// const outputRepeat = (str) =>
//   str
//     .toUpperCase()
//     .split("")
//     .map((item, index) => item + item.repeat(index).toLowerCase())
//     .join("-");

// console.log(outputRepeat("sfad"));

const roundToMultiple = (num, multiple) =>
  Math.round(num / multiple) * multiple;

console.log(roundToMultiple(16, 5));
