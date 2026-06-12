1. Reverse String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); 

Output: "olleh"

2. Count Vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("javascript")); 

Output: 3

3. Palindrome Checker
function isPalindrome(str) {
  let cleaned = str.toLowerCase();
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
console.log(isPalindrome("madam")); 

Output: true

4. Largest Number in Array
function largestNumber(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
console.log(largestNumber([3, 7, 2, 9, 1])); 

Output: 9

5. Smallest Number in Array
function smallestNumber(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}
console.log(smallestNumber([3, 7, 2, 9, 1])); 

Output: 1

6. Remove Duplicates
function removeDuplicates(arr) {
  let unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) unique.push(item);
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 

Output: [1, 2, 3, 4]

7. Sort Array
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortArray([5, 2, 9, 1])); 

Output: [1, 2, 5, 9]

8. Student Marks Calculator
function calculateTotal(marks) {
  let total = 0;
  for (let mark of marks) total += mark;
  return total;
}
console.log(calculateTotal([85, 90, 78])); 

Output: 253

9. Shopping Cart Total
function cartTotal(items) {
  let total = 0;
  for (let item of items) total += item.price * item.qty;
  return total;
}
console.log(cartTotal([{price: 10, qty: 2}, {price: 5, qty: 3}])); 

Output: 35

10. Employee Salary Calculator
function calculateSalary(hours, rate) {
  return hours * rate;
}
console.log(calculateSalary(40, 25)); 

Output: 1000