1. What is Flexbox?
Flexbox is CSS’s way of making items line up neatly without you fighting with margin and float all day. It handles spacing, alignment, and resizing.You just set display: flex on a parent div, then use justify-content to control horizontal spacing and align-items for vertical alignment. It is perfect for navbars, centering stuff, or making things responsive without media queries. Basically, flexbox gives more control.

2. What is Responsive Design?
Responsive Design means website automatically adjusts its layout to look good on different screen sizes on desktop, tablet, phone.
We do this using Flexbox and Media Queries.

3. Why are Media Queries used?
Media Queries let you apply different CSS rules based on screen size. That’s how we stack features vertically on mobile.
They are used in responsive design to change the layout based on screen width. Without media queries, the site would look broken on small screens. 

4. Difference between Row and Column layouts
- `flex-direction: row` = items sit side by side, left to right. Default for Flexbox.
- `flex-direction: column` = items stack vertically, top to bottom. Used for mobile layouts.