function findCardFrequency(str) {

    var pattern = new RegExp(/\W/g);

    var strings = str[0].split(pattern).filter(Boolean);

    var resultArr = [];
    var counter = 0;
    var percents = [];

    resultArr = strings.slice(0);
    resultArr = resultArr.filter(function(elem, index, self){return index == self.indexOf(elem)});


    for(i=0;i<resultArr.length;i++){
            for(k=0; k<strings.length;k++){
                if(resultArr[i]==strings[k]) {
                    counter++;
                }
            }
        percents[i]= counter;
        counter=0;
    }

    for(r=0;r<resultArr.length;r++){
        var percent = (percents[r]/strings.length*100).toFixed(2);

        console.log(resultArr[r]+ " ->"+ percent+"%")

    }
}

findCardFrequency(['8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦']);
findCardFrequency(['J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠']);
findCardFrequency(['10♣ 10♥'])