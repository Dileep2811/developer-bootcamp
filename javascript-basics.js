// 1. Add two numbers
let num1 = 10;
let num2 = 20;
console.log("Sum:", num1 + num2);

// 2. Calculator
function calculator(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return a / b;
}
console.log("Calc 10*5:", calculator(10, 5, "*"));

// 3. Even/Odd Checker
let num = 7;
if (num % 2 === 0) console.log(num, "is Even");
else console.log(num, "is Odd");

// 4. Age Calculator
let birthYear = 1999;
let currentYear = 2026;
console.log("Age:", currentYear - birthYear);

// 5. Grade Calculator
let marks = 85;
if (marks >= 90) console.log("Grade: A");
else if (marks >= 75) console.log("Grade: B");
else console.log("Grade: C");

// 6. Multiplication Table
let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n, "x", i, "=", n * i);
}

// 7. Factorial Calculator
function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log("Factorial of 5:", factorial(5));

// 8. Number Comparison
let a = 15, b = 25;
if (a > b) console.log(a, "is bigger");
else console.log(b, "is bigger");

// 9-20: Quick extras
console.log("Hello JS");
let name = "Dileep";
console.log(typeof name);
for (let i = 1; i <= 3; i++) console.log("Loop", i);
function greet() { console.log("Hi"); }
greet();
let arr = [1, 2, 3];
console.log(arr[0]);
let obj = { city: "Kochi" };
console.log(obj.city);
let x = 10, y = 5;
console.log(x > y && y > 0);