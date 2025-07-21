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

// Problem  Find the Shortest Word
console.log("Problem : Find the Shortest Word")
function ShortestWord(str) {
    let word = str.split(" ")
    let ShortestWord = word[0]
    for (const letter of word) {
        if (letter.length < ShortestWord.length) {
             ShortestWord = letter
        }
    }
    return ShortestWord
}
console.log(ShortestWord("My name is muzmail I am Good in programming"))