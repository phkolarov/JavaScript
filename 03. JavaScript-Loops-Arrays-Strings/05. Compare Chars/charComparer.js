function compareChars(arr1, arr2){

    var stringAr1 = arr1.join("");
    var stringAr2 = arr2.join("");

    if(stringAr1==stringAr2){
        console.log("Equal");
    }

    else{
        console.log("Not equal")
    }


}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'] );

compareChars(['3', '5', 'g', 'd'],['5', '3', 'g', 'd']);

compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);