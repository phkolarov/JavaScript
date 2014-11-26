function solve(input){


    var someResult = [];
    var courses = {}
    var averages = {"avgGrade":0,"avgVisits":0,"students":[]};


for(i=0; i<input.length; i++){
    var currentLine = input[i].trim()
    var students = input[0];
    var courses = input[1];
    var grades = parseFloat(input[2]);
    var visits = parseFloat(input[3])



    courses[courses].avgGrade+=grades;





   }



    console.log(courses)
}

solve([
    "Peter Nikolov | PHP  | 5.50 | 8",
    "Maria Ivanova | Java | 5.83 | 7",
    "Ivan Petrov   | PHP  | 3.00 | 2",
    "Ivan Petrov   | C#   | 3.00 | 2",
    "Peter Nikolov | C#   | 5.50 | 8",
    "Maria Ivanova | C#   | 5.83 | 7",
    "Ivan Petrov   | C#   | 4.12 | 5",
    "Ivan Petrov   | PHP  | 3.10 | 2",
    "Peter Nikolov | Java | 6.00 | 9"
])