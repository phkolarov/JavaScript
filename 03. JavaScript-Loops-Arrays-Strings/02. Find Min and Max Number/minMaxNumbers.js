

function minMaxNumbers(numbers){

    var numbersArray = numbers.slice(0);

    numbersArray = numbersArray.sort(function(a,b){return a>b});

    console.log("Min -> " + numbersArray[0])
    console.log("Max -> " + numbersArray[numbersArray.length-1])

}


minMaxNumbers([1, 2, 1, 15, 20, 5, 7, 31]);
minMaxNumbers([2, 2, 2, 2, 2]);
minMaxNumbers([500, 1, -23, 0, -300, 28, 35, 12]);