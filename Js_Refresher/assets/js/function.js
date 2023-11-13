// In this i will play with function and dirty mu hands with function
function add(a, b) {
  console.log("The Sum of a and b = ", a + b);
}

add(2, 3);

// function inside a function
function greet(greetfn) {
  greetfn();
}

greet(() => {
  console.log("Testing inside a function");
});

function innerFunct() {
  console.log("Innerfunction");
}
greet(innerFunct);

// this is builin function first parameter is function and other i time interval after which time this function is executed
setTimeout(innerFunct, 2000);
