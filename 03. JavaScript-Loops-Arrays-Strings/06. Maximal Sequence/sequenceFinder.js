function findMaxSequence(arr) {

        var sortedArray = arr.slice(0);
        var sequence = [];
        var result = [];
        var counter1 = 1;
        var counter2 = 0;

        for(i=0; i<sortedArray.length; i++){

                if(sortedArray[i]===sortedArray[i+1]){
                    counter1++;

                }
                else if(sortedArray[i]!==sortedArray[i+1] && counter1>=counter2){
                    sequence[0]=(sortedArray[i]);
                    counter2=0;
                    counter2=counter1;
                    counter1=1;
                }
        }
        for(i=0; i< counter2; i++){

            result.push(sequence[0]);
        }

    console.log(result)
}
findMaxSequence([2, 1, 1, 2, 3, 2, 2, 2, 1]);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);
findMaxSequence(["happy"]);