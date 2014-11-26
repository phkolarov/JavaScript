function lastDigitAsText(number) {

    var stringNum = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];

    var numString = number.toString();
    var splitedNum = numString.split("");

    var getP = parseFloat(splitedNum[splitedNum.length-1]);
    console.log(stringNum[getP-1])
}

lastDigitAsText(6);
lastDigitAsText(-55);
lastDigitAsText(133);
lastDigitAsText(14567);

