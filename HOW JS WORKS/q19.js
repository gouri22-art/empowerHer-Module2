// Problem Statement: You are tasked with creating two functions, 
// one in the global execution context and another inside a function context.

// Step 1: Declare a global variable age and assign a value to it
let age = 25;

// Step 2: Create a function displayAge that logs the value of age
function displayAge() {
    console.log("Current Age:", age);
}

// Step 3: Create a second function changeAge, which changes the value of age
function changeAge(newAge) {
    age = newAge; // Update the global age variable
    console.log("Age updated to:", age);
}

// Step 4: Call displayAge and changeAge
displayAge()
changeAge(30)
displayAge()
