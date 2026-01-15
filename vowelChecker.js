let v = prompt("Enter Your word to count vowel : ");

function vowelChecker(vc) {
    let vowelsFound = [];
    let targetVowels = "aeiouAEIOU"; 

    for (let i = 0; i < vc.length; i++) {
        if (targetVowels.includes(vc[i])) {
            vowelsFound.push(vc[i]);
        }
    }
    
    console.log("Vowels found:", vowelsFound);
    console.log(`It Contains = ${vowelsFound.length} Vowels`);
}

vowelChecker(v);