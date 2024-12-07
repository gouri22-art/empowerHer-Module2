// ou are given an array of strings representing product categories. 
// Your task is to use reduce() to create an object that counts the occurrences of each category in the array.
let categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

// Using reduce to count occurrences
const categoryCounts = categories.reduce((acc, category) => {
    // If the category exists in the accumulator, increment its count
    if (acc[category]) {
      acc[category]++;
    } else {
      // If the category does not exist, initialize it with a count of 1
      acc[category] = 1;
    }
    return acc;
  }, {});
//   console.log(categoryCounts)
const sortedCategories = Object.entries(categoryCounts)
  .sort(([, countA], [, countB]) => countB - countA) // Sort by counts
  .map(([category]) => category); // Extract only category names

console.log("Sorted Categories:", sortedCategories); 