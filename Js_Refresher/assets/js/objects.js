// Initialize obj and play with it
let users = [
  { name: "hannan", age: 23, education: "Bachelor's in Computer Science" },
  { name: "Ali", age: 25, education: "Bachelor's in Computer Science" },
  {
    name: "Usman",
    age: 22,
    education: "Bachelor's in Computer Science",
    greet() {
      console.log(
        "Testing function inside a object and also print its value is ",
        this.name
      );
    },
  },
];
console.log(users[2].greet());

// Class in Javascript
class Test {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  info() {
    console.log("This is info function : ", this.age, "  :  ", this.name);
  }
}

const test = new Test(23, "Hannan");
test.info();

const test1 = new Test(23, "Hannan1");
test1.info();

// Map Function
// initialize an arr and apply functions onit
let fruitsArray = ["Apple", "Mango", "Bananas", "Dates"];

let noArray = [1, 3, 5, 7, 9];
// Find Index function for array object
let index = fruitsArray.findIndex((item) => {
  return item === "Dates";
});
let newArray = fruitsArray.map((item) => item + "!!!!");
// console.log(newArray);

// some functionality on no array using map
let newNoArray = noArray.map(multipleNo);

const testArray = noArray.map((item) => ({ val: item }));
console.log("This is no No Array : ", testArray);

function multipleNo(item) {
  //   console.log("Item is got from here : ", item);
  return item * 2;
}

// Destructing
// From Array
const [firstName, lastName] = ["Hannan", "Hanif"];
console.log("First Name is  ", firstName, "  LastNAme is  ", lastName);

// From dict obj
const { username: user, age } = {
  username: "Hannan",
  age: 23,
};

console.log("Name is ", user, "  age is ", age);

// Destructing from function
function destractor(id, name) {
  console.log(id, name);
}
const obj = {
  id: 1,
  name: "Hannan",
};
destractor(obj);

// Spread Operator (...) dot for merging two objects
const name1 = ["Ali", "Abdullah"];
const name2 = ["Hassan"];

const mergeName = [...name1, ...name2];
console.log("MergeName Array : ", mergeName);

const mergeObj = {
  ...obj, //... use to merge obj init
  lastname: "Hanif",
};

console.log("Merge Obj : ", mergeObj);
