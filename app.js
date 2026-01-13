// Basic stuff

// let a = parseInt(prompt("Enter 1st number: "))
// let b = parseInt(prompt("Enter 2nd number: "))
// let c = prompt("Choose your operator between +, -, *, /")

// if (c == '+'){
//     console.log(`${a} + ${b} = ${a+b}`)
// }
// else if(c == '-'){
//     console.log(`${a} - ${b} = ${a-b}`)
// }
// else if( c == '*'){
//     console.log(`${a} x ${b} = ${a*b}`)
// }
// else if(c == '/'){
//     console.log(`${a} / ${b} = ${a/b}`)
// }
// else{
//     console.log(`${c} Is Invalid Operator`)
// }



//---- Array
// const topAiTool=['OpenAI','Gemini','Cluade','Grok','LLMA'];
// const useCase = new Array('Text generation','Video Generation','Image generation','Audio Generation');

// console.log(topAiTool.at(-1))
// console.log(useCase)

// topAiTool[4]='Perplexity'
// console.log(topAiTool)

// const strUseCase = useCase.toString();
// console.log(strUseCase)
// console.log(topAiTool.join('-'))
// console.log('\n')

// topAiTool.pop()
// console.log(topAiTool)
// topAiTool.push('Deepseek')
// console.log(topAiTool)
// console.log('\n')


// topAiTool.unshift('Hugging face')
// console.log(topAiTool)

// console.log('\n')
// topAiTool.shift()
// console.log(topAiTool)


// const arr1 = ['apple','mango','orrange',['pineapple','watermelon']];
// const arr2 = ['ice-cream','chocolate','chips'];
// const arr3 = ['French fry','Burger','Pizza'];


// console.log('\n')

// const arr4 = arr1.concat(arr2,arr3)
// console.log(arr4)
// console.log('\n')

// const neww = arr1.flat()
// console.log(neww)



// console.log('\n')



// arr2.splice(1,0,'coca cola')
// console.log(arr2)

// console.log('\n')


// arr2.splice(1)
// console.log(arr2)




//---- Math Functions
// let num1 = 3.44553344;
// let num2 = 3;
// console.log(Math.round(num1))
// console.log(Math.ceil(num1))
// console.log(Math.floor(num1))
// console.log(Math.pow(num2,2))
// console.log(Math.sqrt(9))
// console.log(Math.abs(-5))
// console.log(Math.max(12,22,33,1))
// console.log(Math.min(12,22,33,1))
// console.log(Math.PI)
// console.log(Math.sin((90* Math.PI)/180))



//Practice Function
// let num1 = parseInt(prompt("Enter 1st Value = "))
// let num2 = parseInt(prompt("Enter 2nd Value = "))
// let operation = prompt('Enter your Operation Type between + , - ,*, / = ')

function calculator(operation,num1,num2){
    switch(operation){
        case '+':
            console.log(`Addision is = ${num1+num2}`)
            break;
        case '-':
            console.log(`Substraction is = ${num1-num2}`)
            break;
        case '*':
            console.log(`Multiplication is = ${num1*num2}`)
            break;
        case '-':
            console.log(`Division is = ${num1/num2}`)
            break;
        default:
            console.log("Undefined")
    }

}
//alculator(operation,num1,num2)


// Self Invoking Function
(function(message){
    console.log("Hello from self invoking function",message)
}('what about the object?'))


//stroing function in a varriable
let cal = function(a,b){
    return a+b;
}

console.log(cal(10,20))







// Practice Object
const mobilModel = {
    'Brand' : 'Apple',
    'Processor' : 'Bionic A17',
    'Model' : 'Air17'
}

console.log(mobilModel.Brand)