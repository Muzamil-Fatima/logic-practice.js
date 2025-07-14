// Problem Find the Most Frequent Category
console.log("Problem Find the Most Frequent Category")
function mostFrequent(array) {
  const result = {}
  let maxCount = 0
  let mostRepeatedElement = ""
  array.forEach(product => {
    const category = product.category;
    if (!result[category]) {

      result[category] = 1
    } else {
      result[category]++
    }
    if (result[category] > maxCount) {
      maxCount = result[category]
      mostRepeatedElement = category
    }
  });
  return `${mostRepeatedElement} (${maxCount} items)`
}
console.log(mostFrequent([
  { name: "Laptop", category: "Electronics" },
  { name: "Shoes", category: "Fashion" },
  { name: "Mobile", category: "Electronics" },
  { name: "Jeans", category: "Fashion" },
  { name: "Washing Machine", category: "Home" },
  { name: "Fridge", category: "Electronics" }
]
))