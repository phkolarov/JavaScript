function solve(args){

    var pattern = RegExp(/\D+/g);


    var numbers = args[0].split(pattern).filter(Boolean).map(function(item){return parseInt(item)});


    var totalresult = [];

    for(i=0; i< numbers.length; i++){
        totalresult.push(decimalToHex(numbers[i]));

    }

    function decimalToHex(d) {
        return "0x"+(d+0x10000).toString(16).substr(-4).toUpperCase();
    }

    console.log(totalresult.join("-"));

}

    solve('5tffwj(//*7837xzc2---34rlxXP%$”.') //var result = numbers.slice(0).map(function(item){return item.toString(16).toUpperCase()});