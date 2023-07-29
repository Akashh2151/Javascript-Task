function gradeCalculation(marks) {
  if (typeof marks !== 'number' || marks < 0 || marks > 100 || isNaN(marks)) {
    console.log(`The marks you entered: ${marks} is not valid. Please provide valid marks.`);
    return;
  }

  if (marks >= 90) {
    console.log(`Fantastic marks: ${marks}, Your grade is A+`);
  } else if (marks >= 75) {
    console.log(`Excellent marks: ${marks}, Your grade is A`);
  } else if (marks >= 50) {
    console.log(`Good marks: ${marks}, Your grade is B`);
  } else if (marks >= 35) {
    console.log(`Marks is: ${marks}, Your grade is C, Need Improvement.`);
  } else {
    console.log(`Marks is: ${marks}, Your grade is F, Failed`);
  }
}

// Invoking the function with the provided values
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighy"); // The input is "Eighy", not "Eighty".
gradeCalculation(null);
gradeCalculation(undefined);