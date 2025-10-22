const gradebook = [
  {
    studentName: "Andrew A.",
    quizScores: [86, 91, 88, 82],
  },
  {
    studentName: "Emily B.",
    quizScores: [78, 82, 85, 89],
  },
  {
    studentName: "James C.",
    quizScores: [92, 88, 90, 86],
  },
];

// Access nested data
// console.log(gradebook[1].quizScores[2]); // 85 — Emily B.'s 3rd quiz score

// Shallow copy of the gradebook array
// const gradebookCopy = [...gradebook];
// gradebookCopy[0].studentName = "Andrew Z.";

// console.log(gradebook[0].studentName); // "Andrew Z." 😱 — why?

const printStudentNames = (arr) => {
  //bracket notation, dot notation to access the student names
  //use for loop to access each element of the array 
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].studentName);
  }
};

const printStudentGrades = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].studentName, arr[i].quizScores);
  }
}
printStudentGrades(gradebook);
printStudentNames(gradebook);
//in arrays to do an action(operation) what do we use
// run a for loop so we can access each element and in each element access student names

const loopGrdes = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i].studentName}`)
    loopGrades(arr[i].quizScores)
  }
}
printStudentGrades(gradebook);

