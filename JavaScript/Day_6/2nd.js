// Create a function reverseWords(sentence) that:
//     Takes a string sentence.
//     Returns a new string where the order of words is reversed.
//     Example: "Hello world" → "world Hello".
// Approach: Think of a way to convert the string into an array of words.

// function reverseWords(words) {
// 2. World 1. Hello

//   let wordsArray = words.split(" ");
//   console.log(wordsArray);

//   let reverseWordsArray = wordsArray.reverse();
//   console.log(reverseWordsArray);

//   let conToString = reverseWordsArray.join(" ");
//   console.log("This is Final ans: ", conToString);

//   return words.split(" ").reverse().join(" ");
// }

// console.log(reverseWords("Hello Worlds")); // "world hello";

var food = [
  {
    type: "fruit",
    name: "Banana",
  },
  {
    type: "vegetable",
    name: "Lettuce",
  },
  {
    type: "fruit",
    name: "Strawberry",
  },
  {
    type: "nut",
    name: "Brazil",
  },
  {
    type: "fruit",
    name: "Orange",
  },
  {
    type: "vegetable",
    name: "Onion",
  },
  {
    type: "nut",
    name: "Peanut",
  },
];

let few = food
  .filter((item) => item.type === "fruit")
  .map((item) => item.name)
  .sort();

console.log(few);
