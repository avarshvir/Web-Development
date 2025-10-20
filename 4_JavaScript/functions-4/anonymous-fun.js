/*
This is called an anonymous function, because it has no name. 
You'll often see anonymous functions when a function expects to receive another function as a parameter. 
In this case, the function parameter is often passed as an anonymous function.
*/

(function () {
    //alert("hello");
    console.log("hello");
})

// example codes line 13 to 17 is written as in line 19 to 21:
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);

textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});