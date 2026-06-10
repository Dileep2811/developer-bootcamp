Day 3 Notes - Advanced CSS & Responsive Design

1. What is Flexbox?
Flexbox is a CSS layout tool that makes it easy to align and space items inside a container. 
Instead of using floats or weird positioning, you can use `display: flex` to arrange items in a row or column and center them easily.

2. What is Responsive Design?
Responsive Design means your website automatically adjusts its layout to look good on different screen sizes - desktop, tablet, phone.
We do this using Flexbox and Media Queries.

3. Why are Media Queries used?
Media Queries let you apply different CSS rules based on screen size. 
Example: `@media (max-width: 768px)` means “if the screen is smaller than 768px wide, use this code instead”. 
That’s how we stack features vertically on mobile.

4. Difference between Row and Column layouts
- `flex-direction: row` = items sit side by side, left to right. Default for Flexbox.
- `flex-direction: column` = items stack vertically, top to bottom. Used for mobile layouts.