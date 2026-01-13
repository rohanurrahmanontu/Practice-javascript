
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
    'Model' : 'Air17',
    'Release Year' : '2025',
    'IsWaterProof' : true,
    'Camera' : ['20mp','12mp','5mp']

}


// mobilModel.IsWaterProof = false // to change the object value
// console.log(mobilModel.Brand)
// console.log(mobilModel['Release Year'])


// // to freeze an object so that it can\n't manupulate from outside
// Object.freeze(mobilModel);

// // to check existance of any object property
// console.log(mobilModel.hasOwnProperty('Camera'))


// // to check keys and values inside an object
// console.log(Object.keys(mobilModel))
// console.log(Object.values(mobilModel))


// // write function inside an object
// const phoneModel = {
//     'Brand' : 'Samsung',
//     brandName : function(){
//         return `Mobile brand is ${this.Brand}`
//     }
// }

// console.log(phoneModel.brandName())



// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const obj2 = {
//   p: 1,
//   q: 2,
//   r: 3,
// };

// const obj3 = {
//   x: 1,
//   y: 2,
//   z: 3,
// };

// const final = { obj1, obj2 };
// // const objFinal = Object.assign(target, source);
// // const objFinal = Object.assign({}, obj1, obj2, obj3);
// // const obj3 = { obj1, obj2 };
// // const objFinal = Object.assign(target, source);
// // const objFinal = Object.assign({}, obj1, obj2, obj3);

// const objFinal = { ...obj1, ...obj2, ...obj3 };
// console.log(objFinal);

// console.log(mobileModel.battray.mah);

// /*
//  * Object Constractor
//  * Singleton
//  */
// function Person(first, last) {
//   (this.firstName = first), (this.lastName = last);
// }

// const person1 = new Person('rohan', 'rahman');
// person1.age = 18;
// const person2 = new Person('Shovo', 'Ahmed');
// person2.greet = function () {
//   return 'Hello';
// };

// console.log(person1);
// console.log(person2.greet());





// Practice Symbol
const x = Symbol("Hello Wrold")
console.log(x)
console.log(x.description)


//Add symbol as an object
let test = {
    "name" : 'Hello'
}
test[x] = "How Are You"

console.log(test[x])



let n = parseInt(prompt("Enter your number = "));
if (n/2 == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}