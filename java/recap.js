// Instructions:
      // Using the given arrays, complete the questions below!

      // Rows of Students
      var studentsRow1 = ["Rachelle", "Jacob", "Jerome", "Greg", "Matt", "Walt"];
      var studentsRow2 = ["Jeremiah", "Luis", "Nathan", "Analben"];
      var studentsRow3 = ["Aisha", "Stephen", "John"];

      // Entire Class
      var entireClass = [studentsRow1, studentsRow2, studentsRow3];


      // How do we print out every single student in Row 1?
    for(i=0; i<studentsRow1.length; i++) {
        console.log("In Row 1 we have: " + studentsRow1[i])
    }

      // How do we print out every student in Row 2 whose first name begins with J?
    for(i=0; i<studentsRow2.length; i++) {
        if (studentsRow2[i].charAt(0) == "J") {
            console.log(studentsRow2[i] + " starts with a J.")
        }
    }

      // Using the entireClass array, how do we access the second student in row 3?
    console.log(entireClass[2][1])

      // Using the entireClass array, how do we access the third student in row 2?
      console.log(entireClass[1][2])