Here are the **answers to the “Knowledge Check” questions** from The Odin Project’s Box Model lesson:

***

**1. From inside to outside, what is the order of box-model properties?**

- **Content** → **Padding** → **Border** → **Margin**

***

**2. What does the `box-sizing` CSS property do?**

- It controls how the total width and height of an element are calculated.
    - With `box-sizing: content-box` (default): width/height is just the content area.
    - With `box-sizing: border-box`: width/height includes content + padding + border.

***

**3. What is the difference between the standard and alternative box model?**

- **Standard Box Model (`content-box`):**  
  width/height includes only the content, so padding/border are added outside the set values—element gets bigger.
- **Alternative Box Model (`border-box`):**  
  width/height includes content + padding + border—element always stays at the set size.

***

**4. Would you use `margin` or `padding` to create more space between 2 elements?**

- **Margin**

***

**5. Would you use `margin` or `padding` to create more space between the contents of an element and its border?**

- **Padding**

***

**6. Would you use `margin` or `padding` if you wanted two elements to overlap each other?**

- **Margin:** Use a **negative margin** to make elements overlap.

***

**7. How do you set the alternative box model for all of your elements?**

- Apply this CSS:
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
  }
  ```
***

**8. How do you center an element horizontally?**

- Set a specific width and use:
  ```css
  margin: 0 auto;
  ```
***

Let me know if you need detailed explanations or code examples for any answer!

[1](https://www.theodinproject.com/lessons/foundations-the-box-model#the-box-model)