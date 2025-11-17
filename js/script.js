// variables
//primitive data types
let userName = "anna";
let userAge = 18;
let userStatus = true;
let number = null;
let item;

console.log(userName);
console.log(userAge);
console.log(typeof number);

console.log(!true);

//
let item1 = 5;
let item2 = "10";

let result = item1 + item2;
console.log(result);

//
let item3 = 10;
item3 += 4;
// item3 = item3 + 4
console.log(item3);

//
console.log(5 == "5"); //true
console.log(5 === "5"); //false

// და &&
console.log(true && false); // false
console.log(true && true); //true
console.log(true && "Hello"); //'Hello'
console.log(false && "Hello"); //false

// ან ||
console.log(true || true); // true
console.log(false || true); //true
console.log(false || false); //false

//false values
// 1. false 2. 0 3."" 4.null 5.NaN 6.undefined

console.log("" && "hello");
console.log("hi" && undefined); //undefined

//
let element = 15;

if (element < 10) {
  console.log("Hi1");
} else if (element > 10 && element < 13) {
  console.log("hi2");
} else if (element > 8 && element < 17) {
  console.log("hi3");
} else if (element > 6) {
  console.log("hi4");
} else {
  console.log("error");
}

//ternary operator

let conditionResult =
  element < 10
    ? "Hi1"
    : element > 10 && element < 13
    ? "hi2"
    : element > 8 && element < 17
    ? "Hi3"
    : element > 6
    ? "hi4"
    : "error";
console.log(conditionResult);
