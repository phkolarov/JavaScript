function change(args){
var bil = parseFloat(args[0]);
var mode = args[1];

    var totalResult = 0;

        if(mode== "happy"){

            var result = bil*0.1;
            totalResult=result;
        }
        else if(mode == "married"){

            var result2 = bil*0.0005;
            totalResult=result2;
        }
        else if(mode == "drunk"){

            var result3 = (bil*0.15).toString().split("");
            if(parseFloat(result3[0])>2){
            var result31 = Math.pow(parseFloat(result3[0]),bil);
           totalResult=result31;}
            else{
                totalResult=(bil*0.15);
            }
        }

        else{
            var result4 = bil*0.05;
             totalResult=result4;

        }


return console.log(totalResult.toFixed(2));


}

change(['120.44','happy']);
change(['1230.83','drunk']);
change(['716.00','bored']);
change(['3', 'happy']);
