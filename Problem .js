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


// Problem: Count Vowels in a String
console.log("Problem: Count Vowels in a String")
function VowelsInString(str) {
    let total = {}
    let result = []
    let count = 0
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            result.push(char)
            if (!total[char]) {
                total[char] = 1
            }
            else {
                total[char]++
            }
        }
    }
    return {
        total: total,
        count: result.length,
        vowels: result
    }
}
console.log(VowelsInString("Muzamil Fatima"))
