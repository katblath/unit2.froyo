// create prompt
// split the input on comma into array
// group the values from array into obj
// using loop
//     increase count value in object for each instance
// log the object to show that stuff works
// figure out how to trim the space (from prompt) if there is time, and there was time

// heres the prompt
const input = prompt(
  "Enter a list of flavors separated by a comma, NO SPACES",
  // give them some helper text
  "vanilla,cherry,vanilla,broccoli,green-tea"
);
// Split the string of numbers into an array of strings & trim space if applicable after the comma.
const stringArray = input.split(",").map((s) => s.trim());
console.log(stringArray);

// now count how many of the same answer
const obj = {};
for (let i = 0; i < stringArray.length; i++) {
  stringArray[i] in obj
    ? //   if true then below
      (obj[stringArray[i]] += 1)
    : // console.log("flavor exists")
      // if false then below
      (obj[stringArray[i]] = 1);
}
console.table(obj);

// everythinig below is showing my work. hours of frustration
// console.log("can you get stuff from array to object?");
// const printObject = (objFlavor) => {
//   for (const key in objFlavor) {
//     console.log(`key: ${key}, value: ${objFlavor[key]}`);
//   }
// };

// function f(stringArray, value) {
//   let n = 0;
//   const newArray = [];
//   for (i = 0; i < stringArray.length; i++) {
//     if (stringArray[i] == value) {
//       n++;
//     }
//   }
//   return newArray[i] + 1;
// }
// console.log("this is fucking text " + newArray);
// console.log("the values!", Object.values(stringArray));
// const printObject = (obj) => {
//   console.log("obj passed to function");
//   for (const key in obj) {
//     console.log(`${obj[key]}`);
// };
// printObject(stringArray);
// this is shit below
// const simpleObject = (key, value) => {
//   const ject = {};
//   ject[key] = value;
//   return ject;
// };

// function getOccurence(array, value) {
//   let count = 0;
//   array.forEach((v) => v === value && count++);
//   return count;
// }
// console.log(getOccurence(stringArray, 1)); //2
// console.log(getOccurence(stringArray, 3)); //3

// function match(stringArray) {
//     const show = {};
//     if (let i = 0; i = i; i++) {
//         show.push(stringArray);
//     }
// }

// const mybike = {
//   tire: true,
//   spokes: true,
//   handlebar: true,
//   condition: "fair",
// };
// for (const key in mybike) {
//   console.log(key);
// }
// const countDupes = (arr) => {
//   const counts = new Map();
//   arr.forEach((stringArray) => {
//     counts.set(value, (counts.get(value) ?? 0) + 1);
//   });
//   return Object.fromEntries(counts);
// };
