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


// Problem: Count Occurrences of Each Character in a String
function CharOccurrences(str) {
    let result = {}
    let letter = str.split("")
    letter.forEach(letters => {
        if (letters !== " ") {
            if (!result[letters]) {
                result[letters] = 1
            } else {
                result[letters]++
            }
        }
    });

    return result
}
console.log(CharOccurrences("Muzamil Fatima"))

