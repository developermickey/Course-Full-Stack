// Object Collections of key and value pair

// let obj = {
//   // key: value,
// };

// let student = {
//   name: "Vidushi",
//   rollNumber: 11111,
//   branch: "CS",
//   clgName: "SIRT",
//   isPassed: false,
// };

//  How to access object value

// 2 type access

// 1. Dot Notation

// console.log(student);
// console.log(student.name);
// console.log(student.branch);
// console.log(student.clgName);
// console.log(student.isPassed);
// console.log(student.rollNumber);

// 2. Bracket Notation

// console.log(student["name"]);
// console.log(student["branch"]);
// console.log(student["clgName"]);
// console.log(student["isPassed"]);
// console.log(student["rollNumber"]);

// create an obj with name Cap
// key, name, age, friends, address, movies

let cap = {
  name: "Captain America",
  age: 205,
  friends: ["Tony", "Thor", "Natasha"],
  address: {
    hno: 102,
    street: "Mp Nagar",
    city: "Bhopal",
    pincode: 462001,
  },
  movies: ["Captain America", " End Game", "infinity War"],
};

// console.log(cap.address.street);
// console.log(cap["address"]["street"]);

// How to add value in object

// isAveger:

// cap.isAveger = true;

// cap.movies.push("Caps Cute");

// console.log(cap);

//  How Delete an object value

// delete cap.age;

// console.log(cap);
