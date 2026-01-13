// let a = prompt("Enter your word to reverse:");
// let reversed = "";

// for (let i = a.length-1; i >= 0; i--) {
//     reversed += a[i]; 
// }

// console.log(reversed);


// modern way
let a = prompt("Enter your word:");
let reversed = "";

for (let char of a) {
    reversed = char + reversed;
}

console.log(reversed);