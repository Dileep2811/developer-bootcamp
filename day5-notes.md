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



AI TASK



Review DOM code.
● Explain event handling.
● Improve structure.
11:54 AM
Here is a complete review of your DOM code, a breakdown of modern event-handling practices, and a walkthrough of the improved structure we implemented for your Day 5 student tracking app.

1. Review of Your DOM Code
Looking at the DOM logic inside your 

google-clone.html:L123-L129
:

html
<script>
    document.getElementById('btn-clear').addEventListener('click', () => {
      document.querySelector('.search-input').value = '';
      document.querySelector('.search-input').focus();
    });
  </script>
Feedback & Strengths:
Good separation of actions: Using addEventListener instead of inline HTML attributes (like onclick="...") is the modern industry standard.
UX consideration: Setting .focus() immediately after clearing is a fantastic user experience (UX) touch, keeping the cursor active in the input box.
Recommended Enhancements for Production:
Cache DOM Queries: You query document.querySelector('.search-input') twice inside the event handler. In larger apps, repeatedly scanning the DOM decreases performance. Store the reference in a variable.
Form resets: Since inputs live inside a <form> element, you could invoke formElement.reset() which automatically clears all internal inputs.
Improved Version:

javascript
const clearBtn = document.getElementById('btn-clear');
  const searchInput = document.querySelector('.search-input');
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
  });
2. Explanation of Event Handling
Event handling allows web pages to react to user interactions (clicks, keyboard strokes, form submissions, hover states). There are three key concepts implemented in your Day 5 curriculum:

A. Event Listeners (addEventListener)
This registers a function (callback) to execute when a specific event occurs on a target element:

javascript
targetElement.addEventListener(eventName, callbackFunction);
B. Preventing Default Actions (event.preventDefault())
Many elements have default behaviors. For example, submitting a form refreshes the page or navigates away. By calling e.preventDefault(), we intercept this behavior, allowing our custom Javascript logic to run without losing the browser state.

C. Event Delegation (High Performance)
When displaying list items dynamically (like student cards), adding a click listener to every single edit/delete button is inefficient. Furthermore, if you add new students later, their buttons won't have the event listeners bound.

Solution: Attach one single event listener to a static parent container (e.g., #records-list).
When a button inside is clicked, the click event "bubbles" up to the parent.
By reading event.target inside the parent handler (often utilizing event.target.closest('.button-selector')), we can precisely identify which button was clicked and read custom data values (like data-name).
3. Improved Structure
A. Core JavaScript Code Refactoring
In 

day5.js
, we refactored your functional code to utilize a modern Object-Oriented class architecture (StudentManager class).

OOP Architecture: Encapsulates students state within a class instance (StudentManager), preventing polluting the global namespace.
Modern Array Helpers:
Replaced manual for...of accumulation loops with Array.prototype.reduce() in calculateTotal.
Replaced basic search loops with Array.prototype.find() in updateStudent.
Replaced index filtering with a clean Array.prototype.filter() in deleteStudent.
Input Validation: Added check validations to guard against invalid marks inputs and non-string values.
B. Interactive Web UI Implementation
To demonstrate how event handling binds to this structure, I created two new files in your workspace:
