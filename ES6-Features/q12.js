// Write an arrow function that takes a number as input and returns both its square and cube in an object, using implicit return. The function should be as concise as possible.

// Requirements:
// The arrow function should use implicit return (no curly braces or return keyword).
// The function should return an object in the format { square, cube }.

const calculateSquareAndCube = num => ({ square: num ** 2, cube: num ** 3 });

// Example Input 
console.log(calculateSquareAndCube(5))
console.log(calculateSquareAndCube(3))
console.log(calculateSquareAndCube(2))
