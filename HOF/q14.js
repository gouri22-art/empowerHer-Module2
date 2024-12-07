// Title:
// L1 - Employee Performance Evaluation System
// You are tasked with building an Employee Performance Evaluation System. 
// You have an array of employee objects, where each employee has the following properties: name, tasksCompleted, and rating.


// console.log(filteredEmployees)
// Map the filtered employees to a new array that contains only the employee's name and their performance level.

//   console.log(evaluatedEmployees);
// Sort the final array of employees in descending order based on their performance level, 
// prioritizing "Excellent", then "Good", and finally "Needs Improvement".
// Sort the array based on performance level
const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 },
  ];
  
  // Step 1: Filter employees who have completed more than 5 tasks
  const filteredEmployees = employees.filter(emp => emp.tasksCompleted > 5);
  
  // Step 2: Map to a new array with name and performance level
  const evaluatedEmployees = filteredEmployees.map(emp => ({
    name: emp.name,
    performance: 
      emp.rating > 4.5 ? "Excellent" : 
      emp.rating >= 3 ? "Good" : "Needs Improvement"
  }));
  
  // Step 3: Sort the array based on performance level
  const performancePriority = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 0
  };
  
  const sortedEmployees = evaluatedEmployees.sort((a, b) => 
    performancePriority[b.performance] - performancePriority[a.performance]
  );
  
  console.log(sortedEmployees);
  