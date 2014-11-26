function findCardFrequency(str){

    var pattern = new RegExp(/\W/g);

    str[0]= str[0].toUpperCase();
    var sortedString = str[0].split(pattern).filter(Boolean).sort();

    var resultArr = {};
    var counter1 = 1;
    var counter2 = 0;


    for(i=0;i<sortedString.length;i++){

        if(sortedString[i]==sortedString[i+1]){
            counter1++;
        }
        else if(sortedString!=sortedString[i+1] && counter1>=counter2){
            resultArr[sortedString[i]]=(counter1/sortedString.length*100).toFixed(2);
            counter1=1;

        }

    }

//    resultArr= resultArr.sort(function(a,b){return a>b});

    for(i in resultArr){
        console.log(i + " -> " +resultArr[i]+"%");

    }

}


findCardFrequency(['8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦']);
findCardFrequency(['J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠']);