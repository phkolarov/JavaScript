function findPalindromes(str){

     var arr1 = str[0].toLowerCase().split(/\W+/).filter(Boolean);
     var arr2= arr1.slice(0);
     var palindrome = [];
    for(var i in arr2){

        var reversed = arr2[i].split("").reverse().join("");
        arr2[i]=reversed;
    }

    for(i=0; i<arr1.length; i++){
        if(arr1[i]==arr2[i]){
           palindrome.push(arr1[i]);
        }

    }
    var palindrome = palindrome.join(", ")
    console.log(palindrome)
}

findPalindromes(['There is a man, his name was Bob.']);