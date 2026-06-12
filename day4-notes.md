1. What is JavaScript?
JavaScript is a programming language used to make web pages interactive. It runs in the browser and can change HTML, CSS, and respond to user actions like clicks.

2. Variables
Variables store data. In JS we use:
- `let` - can be changed
- `const` - cannot be changed  
- `var` - old way, avoid using

Example: let name = "Dileep";

3. Data Types
- String: "text"
- Number: 25, 3.14
- Boolean: true, false
- Null: empty value
- Undefined: no value assigned yet

4. Functions
Functions are blocks of code that do a task.

Example:
function greet(name) {
  return "Hello " + name;
}

5. Conditions
Used to make decisions.
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

6. Loops
Loops repeat code.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

7. Errors in JavaScript
Errors disrupt the normal execution flow of a program. When an error occurs, JavaScript "throws" an exception and halts execution unless handled.

### Common JavaScript Error Types
1. **SyntaxError**: Written code violates language grammar rules.
   ```javascript
   // SyntaxError: Unexpected token '{' (missing parenthesis)
   if (true {
     console.log("Hi");
   }
   ```

2. **ReferenceError**: Referencing a variable or function that does not exist or has not been declared.
   ```javascript
   // ReferenceError: message is not defined
   console.log(message);
   ```

3. **TypeError**: Trying to perform an operation on a value of the wrong type (e.g. calling a number as a function).
   ```javascript
   // TypeError: name.push is not a function (arrays have push, strings don't)
   let name = "Dileep";
   name.push("Raj");
   ```

4. **RangeError**: A value is outside its allowed numeric range (e.g. infinite recursion stack overflow).
   ```javascript
   // RangeError: Maximum call stack size exceeded
   function loop() {
     loop();
   }
   loop();
   ```

### Error Handling with Try...Catch
You can use `try...catch` blocks to capture errors and prevent your program from crashing.
```javascript
try {
  let x = y + 5; // ReferenceError because y is not defined
} catch (error) {
  console.log("Caught an error:", error.message);
}

console.log("This line still runs!");
```

AI TASK

1. Give me 20 beginner JavaScript practice questions

I have created a dedicated markdown file in your workspace: 

javascript-questions.md
.

Below is the list of 20 beginner JavaScript practice questions categorized by topic. You can find detailed descriptions, expected inputs/outputs, and starter code templates in the markdown file to practice in your editor.

🟢 1. Variables & Basic Arithmetic
Celsius to Fahrenheit Converter: Convert temperature using $F = C \times 1.8 + 32$.
Simple Interest Calculator: Compute interest given Principal, Rate, and Time.
Swap Two Variables: Swap two variables without using a third helper variable.
🟡 2. Conditionals & Control Flow
Leap Year Checker: Determine if a given year is a leap year.
Largest of Three Numbers: Find the highest number out of three arguments.
Vowel or Consonant: Check if a single character is a vowel (A, E, I, O, U) or consonant.
🔵 3. Loops
Sum of Natural Numbers: Find the sum of all positive integers from 1 up to $N$.
Fibonacci Sequence: Generate an array containing the first $N$ Fibonacci numbers.
Prime Checker: Test whether a given number is prime (only divisible by 1 and itself).
🟣 4. Functions & Strings
Reverse a String: Take a string and return it backwards (e.g. "hello" $\rightarrow$ "olleh").
Palindrome Checker: Check if a word reads the same forwards and backwards (e.g. "radar").
Count Vowels: Count how many vowels appear in a given string.
🔴 5. Arrays
Find Min & Max: Return both the smallest and largest values in an array.
Remove Duplicates: Return a new array with all duplicate values removed.
Sum Array: Add up all the numbers in an array.
Filter Even Numbers: Filter an array to return only its even integers.
🟤 6. Objects
Count Properties: Calculate how many keys/properties are in a given object.
Check for Property: Verify if a specific key exists inside an object.
🟢 7. String & Array Helpers
Capitalize Words: Capitalize the first letter of each word in a string sentence.
Truncate String: Shorten a string if it exceeds a character limit and append ....
How to use this:
You can create a new file or add answers to your 

javascript-basics.js
 file and run them using node javascript-basics.js to see the outputs. Let me know if you would like me to provide solutions or hints for any of these!

 2. Review my Solutions.

 Here is a review of your solutions in 

javascript-basics.js
. Your code runs successfully, and the logic is solid for a beginner level!

Below are specific reviews, edge cases to watch out for, and tips to write cleaner, more robust code.

1. Add two numbers
javascript
let num1 = 10;
let num2 = 20;
console.log("Sum:", num1 + num2);
Review: Correct and simple.
Pro-tip: Consider wrapping it in a reusable function, like add(a, b), so you don't have to redefine variables every time you want to sum different numbers:
javascript
const add = (a, b) => a + b;
2. Calculator
javascript
function calculator(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return a / b;
}
Review: Very nice use of parameters and multiple return statements!
Edge Case: If an invalid operator is passed (e.g. calculator(10, 5, "%")), the function returns undefined.
Pro-tip: Add a fallback return or use a switch statement for cleaner structure:
javascript
function calculator(a, b, op) {
  switch(op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Cannot divide by zero";
    default: return "Invalid operator";
  }
}
3. Even/Odd Checker
javascript
let num = 7;
if (num % 2 === 0) console.log(num, "is Even");
else console.log(num, "is Odd");
Review: Correct modulo % 2 check.
Pro-tip: You can write this in a single line using a ternary operator:
javascript
console.log(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`);
4. Age Calculator
javascript
let birthYear = 1999;
let currentYear = 2026;
console.log("Age:", currentYear - birthYear);
Review: Math is correct.
Pro-tip: Make currentYear dynamic so it doesn't get outdated in the future:
javascript
let currentYear = new Date().getFullYear();
5. Grade Calculator
javascript
let marks = 85;
if (marks >= 90) console.log("Grade: A");
else if (marks >= 75) console.log("Grade: B");
else console.log("Grade: C");
Review: Good use of if-else if-else.
Edge Case: Marks below 0 or above 100 are not validated here.
6. Multiplication Table
javascript
let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n, "x", i, "=", n * i);
}
Review: Perfect loop logic.
7. Factorial Calculator
javascript
function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
Review: Elegant recursive solution!
Edge Case: If a negative number is passed (e.g., factorial(-1)), this will cause an infinite loop and crash with a Maximum call stack size exceeded error.
Fix: Add a check for negative numbers:
javascript
if (x < 0) return "Undefined for negative numbers";
8. Number Comparison
javascript
let a = 15, b = 25;
if (a > b) console.log(a, "is bigger");
else console.log(b, "is bigger");
Edge Case: If a and b are equal (e.g., a = 15, b = 15), it will print "15 is bigger".
Fix: Handle the equality condition:
javascript
if (a > b) console.log(a, "is bigger");
else if (b > a) console.log(b, "is bigger");
else console.log("Both are equal");
9-20: Quick extras
Your playground code checks out perfectly. Great job testing types (typeof), arrays, objects, and logical operators (&&).
What to do next:
If you are ready for a challenge, try solving the new questions inside 

javascript-questions.md
 that we haven't covered yet, such as Palindrome Checker (Q11) or Remove Duplicates (Q14)!