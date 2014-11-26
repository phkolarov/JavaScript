function train(input){


    var someArr = input[0].split(" | ").map(function (e){return e.trim()});

    var newObject = {};


        newObject[someArr[1]]={'name':someArr[0], 'grades':someArr[2], 'submits':[someArr[3]]}

        console.log(newObject)
}

train([
    "Peter Nikolov | PHP  | 5.50 | 8"
])

//{PHP:{name:Peter Nikolov, grades: 5.50, submits[8]}}