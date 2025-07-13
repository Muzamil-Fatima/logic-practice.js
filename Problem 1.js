// Problem 1: Capitalize First Letter
function CapitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(CapitalizeFirstLetter("muzamil"));
// Problem 2: Remove Duplicates from Array
// method 1
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// method 2
function removeDuplicate(array) {
  const unique = [];
  array.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(
  removeDuplicate([7, 7, 7, 7, 7, 77, 7, 8, 8, 8, 8, 8, 8, 8, 88, 8, 8, 8, 88])
);

// Problem 3: Count Vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Muzamil"));
console.log(countVowels("JavaScript"));
console.log(countVowels("React"));

//  Problem 5: Reverse a String
console.log(" Problem 5: Reverse a String:");

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Muzamil"));
// Problem 6: Check if a String is a Palindrome
console.log("Problem 6: Check if a String is a Palindrome");
function isPalindrome(str) {
  const original = str.toLowerCase();
  const reverse = str.toLowerCase().split("").reverse().join("");
  return original === reverse;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Level"));

// Problem 7: FizzBuzz
console.log("Problem 7: FizzBuzz");
function number() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
number();
// Problem 8: Find the Largest Number in an Array
function largerArray(arr) {
  let max = arr[0];
  for (const element of arr) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}
console.log(largerArray([2, 4, 5, 6, 67, 78, 87, 6, 5, 4, 43, 3, 2, 2, 100]));
// Problem 9: Filter Even Numbers from an Array
console.log("Problem 9: Filter Even Numbers from an Array");
function filterEven(arr) {
  const even = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));
console.log(filterEven([11, 13, 15, 20, 22]));
// Problem 10: Count Words in a Sentence
console.log("Problem 10: Count Words in a Sentence");
function countWords(str) {
  return str.split(" ").length;
}

console.log(countWords("I love JavaScript"));
console.log(countWords("React is a JavaScript UI library"));
// Problem 11: Reverse Each Word in a Sentence
console.log("Problem 11: Reverse Each Word in a Sentence");
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("I love JavaScript"));
console.log(reverseWords("React is powerful"));
//  Problem 12: Filter Numbers Greater Than a Given Value
console.log(" Problem 12: Filter Numbers Greater Than a Given Value");

function filterGreaterThan(arr, threshold) {
  const unique = [];
  for (const num of arr)
    if (num > threshold) {
      unique.push(num);
    }
  return unique;
}
console.log(filterGreaterThan([10, 20, 5, 30, 15], 15));
console.log(filterGreaterThan([2, 7, 1, 9, 4], 5));
//  Problem 13: Sum All Even Numbers in an Array
function sumEven(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
console.log(sumEven([12, 34, 56, 78, 90, 12, 4, 5, 67]));
//  Problem 14 “Count how many odd numbers are in an array”
console.log(" Problem 14 Count how many odd numbers are in an array");
function count(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}
console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Problem 15: Find the Missing Number
console.log("Problem 15: Find the Missing Number");
function MissNumber(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return arr.length + 1;
}
console.log(MissNumber([1, 2, 3, 4, 6]));
// Problem 16: Remove Duplicates from an Array
console.log("Problem 16: Remove Duplicates from an Array");
function removeDuplicates(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

function removeDuplicate(arr) {
  const unique = [];
  for (i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(
  removeDuplicate([7, 7, 7, 7, 7, 77, 7, 8, 8, 8, 8, 8, 8, 8, 88, 8, 8, 8, 88])
);
// Problem 17: Find the Most Frequent Element in an Array
console.log("Problem 17: Find the Most Frequent Element in an Array");

function mostFrequent(array) {
  for (let i = 0; i < array.length; i++) {
    let maxCount = 0;
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      mostFrequentElement = array[i];
    }
  }
  return mostFrequentElement;
}
console.log(mostFrequent([1, 2, 3, 2, 4, 5, 2]));
// Problem 18: Find the First Non-Repeating Element in an Array
console.log("Problem 18: Find the First Non-Repeating Element in an Array");
function nonRepeatedArray(array) {
  for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
  }
}
console.log(nonRepeatedArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Problem: Group Words by First Letter
console.log("Problem: Group Words by First Letter")
function GroupingWordByFirstLetter(arr){
    let result = {};
    arr.forEach(element => {
        element= element.toLowerCase();
        const firstLetter = element.charAt(0);
        if(!result[firstLetter]) {
            result[firstLetter] = [];
        }
        result[firstLetter].push(element);
    });
    return result;
}
console.log(GroupingWordByFirstLetter(["apple", "banana", "apricot", "blueberry", "cherry", "avocado", "Muzamil"]));
//  Group by First & Last Letter (like: m_l, a_e)
console.log(" Group by First & Last Letter (like: m_l, a_e)");
let result = {};
function FirstLastLetter(arr) {
  arr.forEach((element) => {
    element = element.toLowerCase();
    const FirstLetter = element.charAt(0);
    const LastLetter = element.charAt(element.length - 1);
    const key = `${FirstLetter}_${LastLetter}`;
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(element);
  });
  return result;
}
console.log(
  FirstLastLetter(["apple", "axe", "angle", "alien", "alone", "ant", "Muzamil"])
);
