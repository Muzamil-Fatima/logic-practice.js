// Problem: Check if Two Strings Are Anagrams
console.log("Problem: Check if Two Strings Are Anagrams")
function StrAnagrams(str1, str2) {
const letter1 = str1.toLowerCase().split("")
const letter2 = str2.toLowerCase().split("")

    return {str1, str2}
}
console.log(StrAnagrams("listen", "silent"))
console.log(StrAnagrams("triangle", "integral"))
console.log(StrAnagrams("hello", "world"))
// Problem: Count Vowels in a String
console.log("Problem: Count Vowels in a String")
function countVowerls(str){
    let count = 0;
    const vowels = "aeiouAEIOU";
    const total = str.split("")
    total.forEach(word => {
        if(vowels.includes(word)){
            count++
        }
    });
    return count;
}
console.log(countVowerls("Muzamil Fatima"))


