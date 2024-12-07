// Write a function createCounter that uses closures to create a simple counter. The function should:

// /Allow incrementing the counter.
// Allow decrementing the counter.
// Display the current count.
function createCounter() {
    // Private variable to hold the count
    let count = 0;
  
    // Return an object with methods to interact with the counter
    return {
      increment: function () {
        count++;
        console.log("Current count:", count)
      },
      decrement: function () {
        count--;
        console.log("Current count:", count)
      },
      display: function () {
        console.log("Current count:", count)
      }
    };
  }
  
  // Example usage
  const counter = createCounter()
  counter.increment()
  counter.increment()
  counter.decrement()
  counter.display()
  