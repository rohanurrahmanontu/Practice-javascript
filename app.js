let a = parseInt(prompt("Enter 1st number: "))
let b = parseInt(prompt("Enter 2nd number: "))
let c = prompt("Choose your operator between +, -, *, /")

if (c == '+'){
    console.log(`${a} + ${b} = ${a+b}`)
}
else if(c == '-'){
    console.log(`${a} - ${b} = ${a-b}`)
}
else if( c == '*'){
    console.log(`${a} x ${b} = ${a*b}`)
}
else if(c == '/'){
    console.log(`${a} / ${b} = ${a/b}`)
}
else{
    console.log(`${c} Is Invalid Operator`)
}
