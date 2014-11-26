
function findLargestBySumOfDigits(arr) {

    var maxSum = Number.MIN_VALUE;
    var largestNum = 0;
    if (arr.length == 0) return undefined;

    for (var i = 0; i < arr.length; i++) {
        var currentNum = arr[i];
        if (isNaN(currentNum) || !(currentNum % 1 === 0)) return undefined;

        currentNum = Math.abs(currentNum);
        var sumOfDigits = 0;
        while (currentNum > 0) {
            sumOfDigits += currentNum % 10;
            currentNum = Math.floor(currentNum / 10);
        }

        if (sumOfDigits > maxSum) {
            maxSum = sumOfDigits;
            largestNum = arr[i];
        }
    }
    return largestNum;
}
