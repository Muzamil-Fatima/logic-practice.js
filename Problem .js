//  Problem: Find the First Non-Repeating Character
function firstUniqueChar(str) {
    let result = {}
    const word = str.split("")
    word.forEach(element => {
        if (!result[element]) {
            result[element] = 1
        }
        else {
            result[element]++
        }

    });

    for (const element of word) {
        if (result[element] === 1) {
            return element
        }
    }
    return "None"
}
console.log(firstUniqueChar("MuzmailFatimaMughal"))