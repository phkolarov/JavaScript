function findMostFreqNum(arr) {

    var sorted = arr.sort(function(a,b){ return a-b});
    var mostpop = [];
    var counter = 1;
    var counter2 = 0;



    for(i=0;i<sorted.length; i++){

            if(sorted[i]==sorted[i+1]){
                counter++;
            }

        else if( sorted[i] != sorted[i+1] && counter>counter2){
            mostpop[0]=sorted[i];
                counter2=counter;
                counter=1;

            }
            else if( sorted[i] != sorted[i+1]){

                counter=1;
            }
    }
console.log(mostpop + " (" + counter2 + " times)")


}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
