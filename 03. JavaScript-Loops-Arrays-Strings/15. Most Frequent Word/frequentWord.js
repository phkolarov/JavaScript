function findMostFreqWord(str) {

    var pattern = new RegExp(/\W+/g);

    str[0]= str[0].toLowerCase();
    var sortedString = str[0].split(pattern).filter(Boolean).sort();

    var resultArr = [1];
    var counter1 = 1;
    var counter2 = 0;


    for(i=0; i<sortedString.length; i++){

            if(sortedString[i+1]==sortedString[i]){
                counter1++;

            }
            else if(sortedString[i+1]!=sortedString[i] && counter1>counter2){
                resultArr=[];
                resultArr[0]=sortedString[i];
                counter2=0;
                counter2=counter1;
                counter1=1;

            }
            else if(sortedString[i+1]!=sortedString[i] && counter1==counter2){

                resultArr.push(sortedString[i]);
                counter1=1;
            }
            else{
                counter1=1;
            }


    }
    for(var i in resultArr){
        console.log(resultArr[i] + " -> " + counter2 + " times")
    }
}
findMostFreqWord(['Hello  my friend, hello my darling. Come on, come here. Welcome, welcome darling.']);
findMostFreqWord(['Welcome to SoftUni. Welcome to Java. Welcome everyone.']);
findMostFreqWord(['in the middle of the night']);
