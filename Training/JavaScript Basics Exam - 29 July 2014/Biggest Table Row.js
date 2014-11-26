function solve(input) {

    var output = "";

    var summer = 0;
    var sum = -Infinity;
    var biggestSum;
    var sumOfBiggesNum = 0;
    for (i = 2; i < input.length - 1; i++) {

        noparsedNums = input[i].trim().match(/(\-?\d+\.+\d+)|(\-?\d+)/g);
        if (noparsedNums == null && sum==-Infinity) {
            console.log("no data");
            return
        }
        else if(noparsedNums == null && sum!==-Infinity){
            continue;
        }
        else {
            nums = input[i].trim().match(/(\-?\d+\.+\d+)|(\-?\d+)/g).map(function (e) {
                return parseFloat(e)
            });
            for (k = 0; k < nums.length; k++) {

                summer += nums[k];

            }
            if (summer > sum) {

                sum = summer;
                biggestSum = noparsedNums.slice(0);
                summer = 0;
            }
        }
    }
    var result = '';
    for (i in biggestSum) {

        result += biggestSum[i] + " + ";
        summer = 0;
        sumOfBiggesNum += Number(biggestSum[i]);
    }


    var totalOutputResult = sumOfBiggesNum + ' = ' + result;
    console.log((totalOutputResult).substring(0, totalOutputResult.length - 2).trim())
}

//solve([
//    "<table>",
//    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
//    "<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>",
//    "<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>",
//    "<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>",
//    "<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>",
//    "</table>"
//])

solve([
    "<table>",
    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "<tr><td>Varna</td><td>-</td><td>18.02</td><td>36.11</td></tr>",
    "<tr><td>Pleven</td><td>1</td><td>-</td><td>1</td></tr>",
    "<tr><td>Vidin</td><td>12850</td><td>-560</td><td>20833</td></tr>",
    "<tr><td>Rousse</td><td>-</td><td>299.999999</td><td>-</td></tr>",
    "<tr><td>Bourgas</td><td>-</td><td>25000</td><td>-</td></tr>",
    "<tr><td>Yambol</td><td>-</td><td>-</td><td>-</td></tr>",
    "<tr><td>Plovdiv</td><td>17.2</td><td>-</td><td>6.4</td></tr>",
    "<tr><td>Sofia</td><td>-</td><td>1</td><td>1</td></tr>",
    "<tr><td>Blagoevgrad</td><td>-</td><td>150</td><td>-</td></tr>",
    "</table>"

]);

//solve([
//    "<table>",
//    "<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
//    "<tr><td>Sofia</td><td>20</td><td>-330</td><td>033</td></tr>",
//    "<tr><td>Rousse</td><td>-3</td><td>30</td><td>3</td></tr>",
//    "<tr><td>Bourgas</td><td>0</td><td>0</td><td>-</td></tr>",
//    "</table>"
//
//])
