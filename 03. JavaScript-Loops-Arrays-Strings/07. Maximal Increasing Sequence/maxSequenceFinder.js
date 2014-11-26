function findMaxSequence(arr){

var increasingSequence = [];
    var increasingSequenceTotal = [];
    for(i=0;i<arr.length; i++){

            if(arr[i] < arr[i+1]){
                increasingSequence.push(arr[i]);
            }
            else if(arr[i]> arr[i+1] || arr[i+1]== undefined && increasingSequence.length>=increasingSequenceTotal.length){
                increasingSequence.push(arr[i])
                increasingSequenceTotal=increasingSequence;
                increasingSequence=[];
            }
    }

    if(increasingSequenceTotal.length > 2){
        console.log(increasingSequenceTotal)
    }
    else{
        console.log("no")
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1])

findMaxSequence([3, 2, 3, 4, 2, 2, 4,5,6,7,2,10,20,30,50,100]);//test