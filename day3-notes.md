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

AI TASK

CSS & Layout Improvements for Netflix Clone
This plan outlines improvements to the layout structure of the Netflix Clone page, addresses responsiveness issues, and refactors Flexbox setups to avoid common pitfalls.

Flexbox Mistakes & Structural Issues Identified
The Wrapping Stretch Mistake (Two-Dimensional Layouts)

File: netflix-clone.css (lines 115-135)
Problem: The .features section uses display: flex with flex-wrap: wrap, and each .feature-card has flex: 1 1 300px. On medium viewports (like tablets), the screen can fit exactly two cards (~300px each + gap). The third card wraps to the next line. Because of flex-grow: 1 (flex: 1 ...), that third card stretches to fill the entire second row. This makes the grid asymmetric and unprofessional.
Fix: Use CSS Grid with repeat(auto-fit, minmax(300px, 1fr)) to create a uniform, auto-adjusting responsive grid where wrapped items maintain their grid-aligned widths.
Redundant Alignment Properties

File: netflix-clone.css (lines 76-83)
Problem: .hero-content has display: flex; flex-direction: column; justify-content: center; align-items: center;. Because .hero-content has a height of auto (it wraps its content), vertical centering (justify-content: center) has no visual effect here. The parent .hero container is already a Flexbox container centering the content vertically.
Fix: Remove the redundant justify-content: center property from .hero-content.
Mixing Flex Gap and Child Margins

File: netflix-clone.css (lines 97-108)
Problem: .hero-content uses gap: 20px for consistent vertical spacing between children. However, .cta-btn specifies margin-top: 10px. This creates a total gap of 30px before the button, overriding the layout consistency and making spacing hard to maintain.
Fix: Remove margin-top: 10px on .cta-btn and rely entirely on the flex container's gap property (or adjust container gap if needed).
Missing Font Imports

Problem: The --font-main variable points to 'Inter', but the Google Font Inter is never imported in HTML or CSS. The page falls back to system Arial.
Fix: Import the Google Font 'Inter' at the top of the stylesheet.
Static/Separated Navbar

Problem: The .navbar is rendering as a block element on a solid black background above the hero image. A premium Netflix clone should overlay the navbar transparently on top of the hero image.
Fix: Position the navbar absolutely (position: absolute) at the top of the layout and give it a transparent background.
Proposed Changes
Stylesheet
[MODIFY] 
netflix-clone.css
Import Google Font 'Inter'.
Restructure .navbar with absolute positioning and overlay.
Clean up .hero-content properties.
Remove redundant button margins.
Refactor .features container to use CSS Grid instead of Flex wrap stretch.
Update styling details (gradients, card borders, and hover transitions) to feel premium.
Verification Plan
Automated/Local Server Checks
Start the server and view pages in browser subagent.
Manual Verification
Resize the browser window to verify responsive scaling of text (clamp values) and features grid layout (no giant stretched cards on wrapped lines).
Take screenshots and create a walkthrough of the changes.