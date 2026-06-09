1. What is HTML?

 HTML stands for HyperText Markup Language. It’s basically the skeleton of a webpage. HTML uses tags like h1, p, img to tell the browser what each content is. One tag says this is a heading, another says this is a paragraph, another says this is an image. HTML doesn’t care about colors or fonts, it just structures the content so the browser knows how to display it. An HTML document always starts with <!DOCTYPE html> that tells the browser that this is HTML5. Then there is html tag which wraps everything. Inside that, there are two main parts which is the head and the body. The head doesn't show any information on the page. The body contains everything the user sees.

2. What is CSS?

 CSS stands for Cascading Style Sheets. If HTML is the skeleton, then CSS is everything that makes it look good like the colors, fonts, spacing, borders, layout. We write CSS in a separate file and link it to your HTML, so we don’t have to style every element one by one inside the HTML.CSS works using selectors, properties, and values. A selector tells CSS which HTML element to style. A property says what to change, and a value says how we want it changed. 
 There are three ways to add CSS to a page. Inline CSS goes inside an HTML tag using style attribute, but that gets messy fast. Internal CSS goes inside a style tag in the head of HTML file. The best way is external CSS, where we put all styles in a separate .css file and link it to our HTML with a link tag in the head. This way we can style our whole site from one place. Overall, CSS is what turns plain HTML into something that looks professional. Without CSS every website would look like a boring text document. 
 
3. Difference between id and class.

The difference between id and class is about uniqueness. An id is meant for one single element on the page. You only use it once, like for your main header. In CSS you target it with a hash symbol like #header. A class is meant to be reused. You can put the same class on ten different elements if you want them to look the same. In CSS you target it with a dot like .card. So id is for one, class is for many.

3. Difference between id and class.

The difference between id and class is about uniqueness. An id is meant for one single element on the page. We only use it once, like for main header. In CSS we target it with a hash symbol like #header. A class can be reused. We can put the same class on ten different elements if we want them to look the same. So id is for one, class is for many. We use classes way more often than ids.

In CSS, an id is stronger than a class. If we style something with an id and also with a class, the id style will win. Most developers use classes for styling and save ids for JavaScript.

We use classes for styling and ids for targeting one specific thing.

4. Difference between margin and padding.

Margin and padding both create space, but in different places. Padding is the space inside the element, between the content and the edge of the box. Margin is the space outside the element, between this box and other boxes. 

Padding makes the element bigger, margin pushes other elements away.

If we add a background color to an element, the background will fill the content area and the padding area, but not the margin. 

Padding controls the space inside, so it’s used to make text feel less cramped against the edge of a box. Margin controls the space outside, so it’s used to separate elements from each other. 

If I want the text to move away from the border, I use padding. If I want two boxes to move away from each other, I use margin.

5. What is Flexbox?

Flexbox is a CSS layout tool that makes it easy to arrange items in a row or column. Flexbox is very useful for centering things, building navbars, and making layouts that adapt to different screen sizes. Flexbox stands for Flexible Box Layout.

6. Why is CSS important?

CSS is important because without it, every website would look like plain text on a white background. CSS is what makes websites readable, branded, and pleasant to use. It lets us control colors, fonts, spacing, and layout. It also lets us to make one site work on mobile, tablet, and desktop using responsive design.

Companies use CSS to apply their colors, fonts, spacing, and overall style so the site feels professional.CSS basically is about making content readable, navigation easy, and the whole experience smooth across all the devices.

7. What are forms?

Forms are how websites collect information from users. Anytime we log in, sign up or search Google, we are using a form. In HTML we build a form with the form tag, and inside it we put input fields and a submit button. Two important attributes on the form tag are action and method. Action tells browser where to send the data. Method tells the browser how to send it. 
The submit button sends all the data in the form to the server. We can also have reset buttons to clear the form.

8. What are input fields?

Input fields are the boxes and controls inside a form where users actually type or choose information. In HTML, we create them using the input tag. The type attribute tells the browser what kind of input to show, and that changes how the field behaves.
