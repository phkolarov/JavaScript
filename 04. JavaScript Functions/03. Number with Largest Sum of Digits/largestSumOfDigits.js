function findLargestBySumOfDigits(arr) {


    var result;
    var inputArray = arr.slice(0);
    var stringNum;

    var number = 0;
    var secondNum = 0;

    for (i = 0; i < inputArray.length; i++) {

        if (typeof inputArray[i] === "string" && typeof inputArray[i + 1] === "string") {
            result = undefined;
        }
        else if (typeof  inputArray[i] === "number" && Math.abs(inputArray[i]) > 10) {

            stringNum = Math.abs(inputArray[i]);
            stringNum = stringNum.toString()
            var splited = stringNum.split("");

                for(k=0; k<splited.length;k++){

                    number+=parseFloat(splited[k]);

                    if(number>secondNum){

                        secondNum=number;
                        number=0;
                        result=inputArray[i];
                    }
                }
            number=0;
        }
    }
console.log(result)
}

findLargestBySumOfDigits([33, 44, -99, 0, 20]);
findLargestBySumOfDigits([5, -105, -110, -15, -125]);
findLargestBySumOfDigits([5, 10, 15, 111]);
findLargestBySumOfDigits(['helo']);
findLargestBySumOfDigits([5, 3.3]);