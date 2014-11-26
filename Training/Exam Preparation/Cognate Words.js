function solve(input) {

    var text = input[0].split(/[^A-Za-z]+/g).filter(Boolean);

    var result = [];
    for (i = 0; i < text.length; i++) {
        for (k = 0; k <= text.length; k++) {
            for (l = 0; l <= text.length; l++) {

                if(i!==k) {
                    if (text[i] + text[k] == text[l]) {

                        var textRezult = text[i] + '|' + text[k] + '=' + text[l];
                                                                    //FIND REPEATED ELEMENTS GIVE -1 or INDEX OF ELEMENT
                            if(result.indexOf(textRezult)< 0){
                                result.push(textRezult)
                            }
                    }
                }


            }
        }


    }

    if(result.length==0){
        console.log('No')
    }
    else{
        console.log(result.join('\n'))
    }


}

solve(['Suspendi123123123512515 /*123sse ultri222ces, leo vitae adip123.><iscing luctus, urna ante rhoncus sapien0123Suspendisse ultrices, leo vitae adipiscing luctus, urna ante rhoncus sapien']);
