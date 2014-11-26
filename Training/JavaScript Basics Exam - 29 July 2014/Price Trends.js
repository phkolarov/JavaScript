function printPricesTrendsTable(input){

    var fixed = "\"fixed.png\"";
    var up = "\"up.png\"";
    var down = "\"down.png\"";


    var inputNum = input.map(Number);
    var numbers = inputNum.slice(0);
    var numbers = numbers.map(function(e){return (Number(parseFloat(e).toFixed(2)));})

    console.log("<table>");
    console.log("<tr><th>Price</th><th>Trend</th></tr>");
    console.log("<tr><td>"+ numbers[0].toFixed(2)+ "</td><td><img src="+ fixed+"/></td></td>");

    for(i=1; i<=numbers.length; i++){



        if(numbers[i]== numbers[i-1] ){

            console.log("<tr><td>"+ numbers[i].toFixed(2)+ "</td><td><img src="+ fixed+ "/></td></td>");

        }
        else if(numbers[i]>numbers[i-1]){
            console.log("<tr><td>"+ numbers[i].toFixed(2)+ "</td><td><img src="+ up+ "/></td></td>");


        }
        else if(numbers[i]<numbers[i-1]){

            console.log("<tr><td>"+ numbers[i].toFixed(2)+ "</td><td><img src="+ down+ "/></td></td>");


        }
    }
    console.log("</table>")

}



//printPricesTrendsTable([36.333,36.5,37.019,35.4,35,35.001,36.225]);
printPricesTrendsTable([36.333,
36.3334,
36.5,
37.019,
37.024,
35.4,
35,
35.001,
35,
36.225,
37.001,
37.000,
37.0,
38,
39,
40,
0,
0.00
])