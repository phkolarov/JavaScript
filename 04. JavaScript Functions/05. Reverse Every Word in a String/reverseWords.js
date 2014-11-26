function reverseWordsInString(str) {


    var string = str.split(" ");
    var result = [];

    for(var i in string){
        result.push(reverser(string[i]));
    }

    function reverser(stringW) {
        var reverse = stringW.split("").reverse();
        var result = reverse.join("");
        return result;
    }

    var finalResult = result.join(" ");
    return console.log(finalResult);
}

reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');




