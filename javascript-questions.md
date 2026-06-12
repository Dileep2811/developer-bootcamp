# 20 Beginner JavaScript Practice Questions

This guide contains 20 practice questions to help you build a solid foundation in JavaScript basics. They cover variables, operators, conditionals, loops, functions, arrays, objects, and string manipulation.

---

### 🟢 Category 1: Variables & Basic Arithmetic

#### 1. Celsius to Fahrenheit Converter
Write a function `celsiusToFahrenheit(celsius)` that converts temperature from Celsius to Fahrenheit.
* **Formula:** $F = C \times 1.8 + 32$
* **Example Input:** `celsiusToFahrenheit(30)`
* **Expected Output:** `86`

```javascript
function celsiusToFahrenheit(celsius) {
  // Your code here
}
```

#### 2. Simple Interest Calculator
Write a function `calculateSimpleInterest(principal, rate, time)` that calculates and returns the simple interest.
* **Formula:** $SI = \frac{P \times R \times T}{100}$
* **Example Input:** `calculateSimpleInterest(1000, 5, 2)`
* **Expected Output:** `100`

```javascript
function calculateSimpleInterest(principal, rate, time) {
  // Your code here
}
```

#### 3. Swap Two Variables (Without Third Variable)
Write a script that swaps the values of two variables `x` and `y` without declaring a third variable.
* **Example Input:** `x = 5`, `y = 10`
* **Expected Output:** `x` becomes `10`, `y` becomes `5`

```javascript
let x = 5;
let y = 10;
// Swap x and y without using a third variable
// Hint: Use ES6 destructuring or basic arithmetic
```

---

### 🟡 Category 2: Conditionals & Control Flow

#### 4. Leap Year Checker
Write a function `isLeapYear(year)` that returns `true` if a year is a leap year, and `false` otherwise.
* **Rules:** A year is leap if it is divisible by 4, but not by 100 unless also divisible by 400.
* **Example Input:** `isLeapYear(2024)` -> `true`, `isLeapYear(2100)` -> `false`

```javascript
function isLeapYear(year) {
  // Your code here
}
```

#### 5. Find the Largest of Three Numbers
Write a function `findLargest(a, b, c)` that takes three numbers as arguments and returns the largest.
* **Example Input:** `findLargest(12, 45, 8)`
* **Expected Output:** `45`

```javascript
function findLargest(a, b, c) {
  // Your code here
}
```

#### 6. Vowel or Consonant Checker
Write a function `isVowel(char)` that takes a single character string and returns `true` if it's a vowel (A, E, I, O, U - case insensitive), and `false` otherwise.
* **Example Input:** `isVowel('e')` -> `true`, `isVowel('z')` -> `false`

```javascript
function isVowel(char) {
  // Your code here
}
```

---

### 🔵 Category 3: Loops

#### 7. Sum of Natural Numbers
Write a function `sumOfN(n)` that returns the sum of all integers from 1 up to `n`.
* **Example Input:** `sumOfN(5)` (i.e. $1 + 2 + 3 + 4 + 5$)
* **Expected Output:** `15`

```javascript
function sumOfN(n) {
  // Your code here
}
```

#### 8. Fibonacci Sequence Generator
Write a function `generateFibonacci(n)` that returns an array containing the first `n` numbers of the Fibonacci sequence.
* **Sequence:** `[0, 1, 1, 2, 3, 5, 8, ...]`
* **Example Input:** `generateFibonacci(6)`
* **Expected Output:** `[0, 1, 1, 2, 3, 5]`

```javascript
function generateFibonacci(n) {
  // Your code here
}
```

#### 9. Prime Number Checker
Write a function `isPrime(num)` that returns `true` if a number is prime, and `false` otherwise.
* **Example Input:** `isPrime(11)` -> `true`, `isPrime(4)` -> `false`

```javascript
function isPrime(num) {
  // Your code here
}
```

---

### 🟣 Category 4: Functions & String Manipulation

#### 10. Reverse a String
Write a function `reverseString(str)` that takes a string and returns it reversed.
* **Example Input:** `reverseString("hello")`
* **Expected Output:** `"olleh"`

```javascript
function reverseString(str) {
  // Your code here
}
```

#### 11. Palindrome Checker
Write a function `isPalindrome(str)` that checks if a word reads the same backward as forward (case-insensitive).
* **Example Input:** `isPalindrome("Radar")`
* **Expected Output:** `true`

```javascript
function isPalindrome(str) {
  // Your code here
}
```

#### 12. Count Vowels in a String
Write a function `countVowels(str)` that returns the number of vowels present in a given string.
* **Example Input:** `countVowels("JavaScript")`
* **Expected Output:** `3` (a, a, i)

```javascript
function countVowels(str) {
  // Your code here
}
```

---

### 🔴 Category 5: Arrays

#### 13. Find Minimum and Maximum in an Array
Write a function `findMinMax(arr)` that returns an object containing the minimum and maximum numbers in an array.
* **Example Input:** `findMinMax([14, 58, 20, 77, 66, 82, 42, 5])`
* **Expected Output:** `{ min: 5, max: 82 }`

```javascript
function findMinMax(arr) {
  // Your code here
}
```

#### 14. Remove Duplicates from an Array
Write a function `removeDuplicates(arr)` that takes an array and returns a new array with all duplicate elements removed.
* **Example Input:** `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`
* **Expected Output:** `[1, 2, 3, 4, 5]`

```javascript
function removeDuplicates(arr) {
  // Your code here
}
```

#### 15. Sum of Array Elements
Write a function `sumArray(arr)` that calculates and returns the sum of all numbers in an array.
* **Example Input:** `sumArray([10, 20, 30, 40])`
* **Expected Output:** `100`

```javascript
function sumArray(arr) {
  // Your code here
}
```

#### 16. Filter Even Numbers
Write a function `filterEvens(arr)` that filters out odd numbers and returns a new array containing only even numbers.
* **Example Input:** `filterEvens([1, 2, 3, 4, 5, 6])`
* **Expected Output:** `[2, 4, 6]`

```javascript
function filterEvens(arr) {
  // Your code here
}
```

---

### 🟤 Category 6: Objects

#### 17. Count Object Properties
Write a function `countProperties(obj)` that returns the number of keys/properties present in an object.
* **Example Input:** `countProperties({ name: "Dileep", age: 26, role: "Developer" })`
* **Expected Output:** `3`

```javascript
function countProperties(obj) {
  // Your code here
}
```

#### 18. Check if Property Exists
Write a function `hasProperty(obj, key)` that returns `true` if the object has the specified key, and `false` otherwise.
* **Example Input:** `hasProperty({ course: "JS", duration: "4 weeks" }, "duration")` -> `true`

```javascript
function hasProperty(obj, key) {
  // Your code here
}
```

---

### 🟢 Category 7: Advanced String & Array Helpers

#### 19. Capitalize First Letter of Each Word
Write a function `capitalizeWords(sentence)` that capitalizes the first letter of every word in a sentence.
* **Example Input:** `capitalizeWords("hello world from javascript")`
* **Expected Output:** `"Hello World From Javascript"`

```javascript
function capitalizeWords(sentence) {
  // Your code here
}
```

#### 20. Truncate a String
Write a function `truncateString(str, maxLength)` that cuts off a string if it is longer than `maxLength` and appends `...` to the end. If it is shorter, it returns the original string.
* **Example Input:** `truncateString("JavaScript is a powerful language", 15)`
* **Expected Output:** `"JavaScript is a..."`

```javascript
function truncateString(str, maxLength) {
  // Your code here
}
```
