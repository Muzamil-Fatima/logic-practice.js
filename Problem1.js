// Problem: Find the Second Largest Number in an Array
function secondLargest(array) {
    let max = -Infinity;
    let secondMax = -Infinity;

    array.forEach(num => {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    });

    return secondMax === -Infinity ? null : secondMax;
}

console.log(secondLargest([10, 5, 20, 20, 4])); 
console.log(secondLargest([3, 3, 3]));         
console.log(secondLargest([1, 2, 3, 4, 5]));   
//  Problem: Find the First Non-Repeating Character
console.log("Problem: Find the First Non-Repeating Character")
function NonRepeating(str) {
    let result = {}
    let word = str.toLowerCase().split("")
    word.forEach(letter => {
        if (letter == " ") return;
        if (!result[letter]) {
            result[letter] = 1;
        }
        else {
            result[letter]++
        }

    });
    for (const element of word) {
        if (result[element] === 1) {
            return element
        }
    }
    return null;
}
console.log(NonRepeating("Hello World"))
// Problem: Find the Longest Word in a Sentence
console.log("Problem: Find the Longest Word in a Sentence")
function LongestWord(str) {
    let maxlength = ""
    let word = str.split(" ")
    word.forEach(element => {
        if (element.length > maxlength) {
            maxlength = element.length
            maxlength = element
        }
    });
    return maxlength;
}
console.log(LongestWord("Muzamil You are greate yes you can do it keep it up and mostly carry  on it."))
// Problem: Count Vowels in a String
console.log("Problem: Count Vowels in a String")
function CountVowels(str) {
    const Vowels = "aeiouAEIOU"
    let word = str.split("")
    let count = 0
    word.forEach(char => {
        if (Vowels.includes(char)) {
            count++
        }
    });
    return count
}
console.log(CountVowels("Muzmail Fatima"))
