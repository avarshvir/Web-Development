/*
If you pass an anonymous function like this, there's an alternative form you can 
use, called an arrow function. Instead of function(event), you write (event) =>:
*/

textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

//example 2:
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]