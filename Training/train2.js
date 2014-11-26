var arr = [10, 50, 20, 60, 5.5, 30];

arr.sort(function(a,b){return a>b});

console.log(arr);

var n = 10;
var resultStr="";


for(row = 1; row<=n; row++){


    for(col=row ; col<=row; col++){

        resultStr += row +" ";
        console.log(resultStr)
    }



}