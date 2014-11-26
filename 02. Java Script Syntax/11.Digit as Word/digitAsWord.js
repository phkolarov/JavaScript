
function convertDigitToWord(value) {

    var digitsWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

   return console.log(digitsWords[value - 1]);

}

convertDigitToWord(parseFloat(prompt("Input your number from 1 to 10")));