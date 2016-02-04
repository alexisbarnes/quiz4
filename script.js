var students = ["Joe", "Jack", "Jane", "Jill"];
var gradeMean = [90, 68, 92, 88];



//Using the data above write a JavaScript that is linked to an html page that determines who has the lowest score.
//Write the answer in sentence form that includes both the name of the student and the score they have.
//Write the answer to both the console and the html page using the document write or other command.

var lowestScore = gradeMean[90];
var studentsLowest;

for (var i=0; i<=students.length; i++){
    //if (gradeMean[i] < gradeMean[90]){
      gradeMean[i]=lowestScore;
      studentsLowest=i;
    }
}

console.log(studentsLowest + " has the lowest score of " + lowestScore);


//document.getElementById("text").innerHTML= "studentLowest" + " has the lowest score of " + " gradeMean";
