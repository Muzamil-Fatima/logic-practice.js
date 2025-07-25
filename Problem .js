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
