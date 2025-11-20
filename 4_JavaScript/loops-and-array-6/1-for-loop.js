const cats = ["Leopard", "Tiger", "Lion", "Cheetah", "Puma", "Jaguar"]

for (const cat of cats) {
    console.log(cat);
}

console.log("---------------------------------");
console.log("----------- map function -------------");

function toUpper(string) {
  return string.toUpperCase();
}

const cats2 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats2) {
    console.log(toUpper(cat));
}
/*console.log("---------------------------------");
for (const cat of cats2) {
    console.log(cat);
}*/
console.log("---------------------------------");
const upperCats = cats2.map(toUpper);
console.log(upperCats);

console.log("---------------------------------");
console.log("----------- filter function -------------");

function lCat(cat) {
  return cat.startsWith("L");
}

const cat3 = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cat3.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
