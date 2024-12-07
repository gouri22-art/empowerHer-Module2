// You are given an array of student objects. Each student object contains a name and marks. 

let student = [{name: "Alice", marks: 58},{ name: "Bob", marks: 85 },{ name: "Charlie", marks: 92 },{ name: "David", marks: 45 }];
// Write a function processStudents that performs the following steps:
function processStudents()
{
    // Filter the students to create a new array of students who scored above 60 marks.
    const newStudents = student.filter((students) => 
    {
        if(students.marks>60)
        {
            return students
        }
    })

    // console.log(newStudents)
    // Sort the filtered array in descending order of marks.
    const sortedNewStudents = newStudents.sort((a,b)=>
    {
        return b.marks-a.marks
    })
    // console.log(sortedNewStudents)
    // Map the sorted array to extract only the names of the students.
    const finalListOfStudents = sortedNewStudents.map(students=>students.name);
    console.log(finalListOfStudents)
}
processStudents()