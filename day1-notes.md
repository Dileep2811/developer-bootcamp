Day 1 - Training Notes

1. What is Frontend?

Frontend is the section of a website which the users can see and can click on it. It includes texts, buttons, logos etc. HTML is used to build the layout of the webpage. CSS is used for styling and Javascript is used for adding programming logic and animations to the webpage.

2. What is Backend?

Backend is the server-side of a website, which handles data processing and logic. The users cannot interact with this layer. When a user interacts with the frontend, it sends a request to the backend where this information is processed and sends the result back. 
For example, when we login to Facebook, the backend checks whether the password is correct.

3. What is API?

API refers to Application Programming Interface. API is a set of rules that lets different applications communicate and share the data.
For example, when we want to track a food delivery, the API goes to the Google Maps server to get the live location and then it grabs the live map to the app to track the delivery driver.

4. What is Database?

Database is the place where data is stored and organized so that it can be retrieved easily for later. It is built to handle large amounts of data which allows thousands of users to access it at the same time. 
For example, Facebook stores our data like photos, posts etc.in a database.

5.  What is MongoDB?

MongoDB is an open-source database that stores data in JSON-like documents instead of tables. Data storage in MongoDB is flexible. It keeps everything together in one document which is like a folder. MongoDB reads and writes data very fast, making it perfect for the stuff that changes such as User profiles, social media posts etc. which is very helpful for the developers. Basically, if the data changes a lot and it needs to be fast, companies prefer MongoDB.

6. What is Node.js?

Node.js helps in running JavaScript on the server instead of just in the browser. It is used to build fast backend apps. It can handle thousands of requests at once without freezing. If an app needs to be fast and has a lot of users at once, that app probably is running on Node.js.


7 What is React?

React is a JavaScript library used to build interactive user interfaces. It breaks the page into reusable pieces called components. It is developed by Facebook.
For  example, a like button on Instagram that updates without reloading the page is built with React.

8. What is HTML?

HTML is the language which is used to create the structure of a webpage. It stands for Hyper Text Markup Language. HTML is what makes up every webpage we see on the internet.
For example, the Google homepage which has a search bar, logo and search button are all HTML tags.

9. What is CSS?

CSS is used to style HTML. It stands for Cascading Style Sheets.It controls colors, fonts, spacing, and layout to make the page look good.
For example, the Google search bar, blue buttons are all styled using CSS.

10. What happens when a user clicks Login?

When a user clicks Login, their browser takes the email and password they typed and sends it to the server. The server then checks the database to see if that email exists and if it's there, it compares the password they entered to the one stored there. If everything matches, the server accepts it and gives the browser a little token that keeps them logged in. If something’s wrong, the server rejects and the page shows an error message instead.


AI TASK

1. Explain Frontend vs Backend with real examples.

🍽️ The Restaurant Analogy
The easiest way to understand the difference is to think of a web application like a restaurant:
Frontend (The Dining Room): This is everything you see and interact with. The decor, the menu, the tables, and the waiter who takes your order. It is designed to be beautiful, user-friendly, and responsive to your requests.
Backend (The Kitchen): This is the hidden area behind the double doors. You don't see it, but it’s where the actual work happens. The chefs (servers/logic) retrieve ingredients from the pantry (database), cook the food (process data), and pass the finished dish to the waiter to bring back to you.


2. Explain APIs like I am 10 years old.

Imagine you are at a restaurant.
You are sitting at the table, looking at the menu.
The Kitchen is where the chefs make all the delicious food.
The Waiter is the API (which stands for Application Programming Interface).
You can't go into the kitchen yourself to get the food—that would be chaotic! Instead, you tell the waiter (the API) what you want. The waiter takes your order to the kitchen, the chefs make it, and then the waiter brings the food back to your table.
In the digital world:
You are a mobile app or a website (like YouTube or Roblox).
The Kitchen is a giant computer (server) that holds all the videos, games, or data.
The Waiter (API) is the messenger that takes your request, grabs the data from the server, and brings it back to your screen.

3. Review my HTML code.

Here is a review of your HTML code, along with some suggested improvements to make it more professional, modern, accessible, and ready for styling!
🔍 Key Observations & Recommendations
Missing Meta Tags:
Add <meta charset="UTF-8"> to ensure special characters display correctly.
Add the <meta name="viewport" content="width=device-width, initial-scale=1.0"> tag to ensure your page looks great and scales properly on mobile devices.
Language Attribute: Add lang="en" to the <html> tag. This is crucial for web accessibility (screen readers) and search engines (SEO).
Semantic HTML:
Instead of a generic <div>, you can wrap your profile container in a <main> tag or an <article> tag to give it more semantic meaning.
Using an unordered list (<ul> and <li>) for Skills is much cleaner and easier to style than a single comma-separated line.
Button Type: Specify type="button" on your <button> to prevent default form submission behaviors if it's ever placed inside a form.
Formatting: Add a missing period at the end of your "About Me" sentence and ensure consistent capitalization (e.g., <!DOCTYPE html> is standard uppercase).

4.  Review my CSS code.

Your CSS is a great starting point! It successfully centers the box, styles the text hierarchy, and adds a nice interactive hover effect to the button.
To take this from a basic layout to a premium, modern design, here is a review of what can be improved, followed by a fully polished version.

🔍 Key Areas for Improvement
Color Harmony:
The combination of a bright light-green background (#e6ffe6) with a primary blue border (#007bff) can feel a bit clashing.
Using a card-based layout with a clean, off-white or subtle gradient background and soft shadows will look much more professional.
Responsiveness (Width):
Setting width: 70% means the card will stretch too wide on desktop screens (making text hard to read) and get too squeezed on mobile.
Better approach: Use max-width: 500px and width: 100%.
Card Definition:
Currently, .box has no background color, so it inherits the green background. Giving the card a solid background (like white) and a subtle shadow (box-shadow) makes it "pop" off the screen.
Spacing & Typography:
Adding a line-height: 1.6 to paragraphs makes them much easier to read.
Adding standard transition effects to the button hover makes the interaction feel smooth rather than instant.

5. Suggest improvements.

Here are some exciting, modern improvements you can make to level up your profile page, ranging from layout additions to interactive JavaScript features:

🎨 1. Visual & Aesthetic Upgrades
Add a Profile Picture (Avatar):
A professional profile page is much more engaging with a photo. You can add a circular avatar image at the top of your card.
Tip: Give it a nice border matching your accent color to tie it into the design.
Modern Social Media Icons:
Add links to your professional profiles (like GitHub, LinkedIn, or Email) using sleek icons (e.g., using FontAwesome or simple inline SVGs).
Skills as Visual Tags/Chips:
Instead of list items or a paragraph, style each skill inside its own colored badge/chip. For example, a light grey background with rounded borders (border-radius: 20px), making them look like tags.

⚡ 2. Interactive Features (Adding JavaScript)
Dark/Light Mode Toggle:
Add a small sun/moon button at the top-right of your card.
With a small snippet of JavaScript, you can let visitors switch between a clean light mode and a cool dark mode.
Interactive Contact Modal:
Instead of the "Contact Me" button doing nothing (or just starting an email client), you can build a modal pop-up with a feedback form. When clicked, it smoothly fades in a form asking for their Name, Email, and Message.
Interactive Skills Filter/Details:
Make the skill badges clickable to show a short explanation of your experience with that skill.

📝 3. Content & Structure Enhancements
Education/Timeline Section:
Since you are an MSc IT Security graduate, adding a miniature timeline showing your degree, university, and key modules studied (like Network Security, Cryptography, etc.) would be very impressive.
Download Resume Button:
Add a secondary button next to "Contact Me" that lets visitors download your resume/CV as a PDF.


END OF DAY DELIVERABLE

Questions:

1. What did I learn?
I learned the difference between Frontend and Backend, what is an API. How to build a basic webpage using HTML and CSS. Learned Git basics like add, commit, push to upload code into GitHub

2. What confused me?
MongoDB confused me at first as I am new and couldn't grasp it easily. I also got stuck on the GitHub upload process but I searched online and used a lot of help from AI to figure it out.

3. What can I explain without help?
I can explain Frontend vs Backend and what HTML and CSS do. I am still remembering GitHub workflow and VS Code commands, so I’d need help with that.

4. What do I want to learn tomorrow?
I want to go back to HTML and CSS basics because I feel rusty after a long time. CSS feels harder than HTML for me, so I want to learn the core commands for both to get really solid before moving forward.