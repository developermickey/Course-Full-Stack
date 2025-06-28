// Strings

//  Jo Char Duble Quote or Single '' or `` "fdhjskfdshfjkds"

// let firstName = "Mickey";
// let lastName = "Mouse";

// let length = firstName.length;

// console.log(firstName + " " + lastName);

// console.log(length);

// let charArray = firstName[1];
// let char = firstName.charAt(1);

// console.log(charArray);
// console.log(char);

// String Immutability

// let str = "Hi";

// str[0] = "h";

// console.log(str);

// let name = "😊"; // 2 Code units ko use karta hai !!!!

// let newUpperCase = name.toUpperCase();
// let newLowerCase = name.toLowerCase();

// let removeSpace = name.trim();

// console.log(name.length);
// console.log(removeSpace.length);

// let name = "Mukesh";
// let age = 10;

// console.log("Hi, I am ", name, "and I am ", age, " years old");
// console.log(`Hi, I'm ${name} and am ${age} old.`);

// let text = "I love dogs";

// console.log(text.replace("dogs", "cats"));

// text

// let text = "apple,banana,orange";
// let arr = text.split(",");
// // console.log(arr[1]);

// let words = ["apple", "banana", "orange"];

// let joinWords = words.join(",");

// console.log(joinWords);
// console.log();

const ul = document.getElementById("mylist");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const li = document.createElement("li");

  li.innerText = "Hello Name";
  ul.appendChild(li);
});
