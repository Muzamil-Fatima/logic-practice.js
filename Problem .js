// Problem: Check if Two Strings Are Anagrams
// console.log("Problem: Check if Two Strings Are Anagrams")
// function StrAnagrams(str1, str2) {
// const letter1 = str1.toLowerCase().split("")
// const letter2 = str2.toLowerCase().split("")

//     return {str1, str2}
// }
// console.log(StrAnagrams("listen", "silent"))
// console.log(StrAnagrams("triangle", "integral"))
// console.log(StrAnagrams("hello", "world"))

// Problem: Find the Most Frequent Number
console.log("Problem: Find the Most Frequent Number");

function MostFrequent(array) {
    let arrange = array.toSorted((a, b) => a - b);
    let result = {};
    let maxCount = 0;
    let mostFrequentNum = arrange[0];

    arrange.forEach(element => {
        result[element] = (result[element] || 0) + 1;

        if (result[element] > maxCount) {
            maxCount = result[element];
            mostFrequentNum = element;
        }
    });

    return mostFrequentNum;
}

console.log(MostFrequent([2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 67, 788, 899, 9, 9, 9]));
console.log(MostFrequent([1, 3, 2, 3, 4, 3, 2, 2]));
console.log(MostFrequent([5, 5, 6, 7, 7, 7, 5]));
console.log(MostFrequent([10, 20, 30]));
