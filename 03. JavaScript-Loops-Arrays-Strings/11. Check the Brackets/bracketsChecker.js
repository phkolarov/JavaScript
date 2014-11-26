function checkBrackets(str) {

    var modifed = str.split(" ");
    var leftBracket = ")";
    var rightBracket = "(";
    var counterLeft = 0;
    var counterRight = 0;

    for (i = 0; i <= modifed.length; i++) {

        if (modifed[i] == leftBracket) {
            counterLeft++
        }
        else if (modifed[i] == rightBracket) {
            counterRight++;
        }
    }
    if (counterLeft == counterRight) {

        console.log("correct");
    }
    else {
        console.log("incorrect")
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');

