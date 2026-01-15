function sumArray(numbers) {
    let total = 0;
    
    for (let num of numbers) {
        total += num; // Adds current number to the running total
    }
    
    return total;
}

const myNumbers = [10, 20, 30, 40];
console.log(sumArray(myNumbers));