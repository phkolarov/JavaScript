function findNthDigit(arr) {


        var num = arr[1].toString().replace(".","");

       var splitedNum = num.split("");


        if(splitedNum[splitedNum.length-arr[0]]===undefined){
            console.log("The number doesn’t have " + arr[0] +" digits")
        }
    else {
            console.log(splitedNum[splitedNum.length - arr[0]]);
        }
}

findNthDigit([1,6]);
findNthDigit([2, -55]);
findNthDigit([6,923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6,888.88]);

