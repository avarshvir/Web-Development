const a = ["AB","B","C"];
console.log(a);

for (const i of a){
    console.log(i[0]);
}

console.log(a.length);

a.push("E","F");
a.push(4)
console.log(a)
console.log(a.length)

// nested array
a.push(["G","H"])
console.log(a)
console.log(a.length)


const b = [
    ["A","B"],
    [1,2],
]
console.log(b);
console.log(b.length);
console.log(b[0]);
console.log(b[0][0]);
console.log(b[0][1]);

// updating array
b[0] = 1;
console.log(b)



