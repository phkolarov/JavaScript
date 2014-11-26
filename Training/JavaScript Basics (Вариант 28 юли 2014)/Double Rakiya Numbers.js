function solve(input){

var num1 = parseFloat(input[0]);
var num2 = parseFloat(input[1]);
    console.log('<ul>');

    for(i=num1; i<=num2; i++){

        var bool = false;
        var num = i.toString().split("");

        for(k=0; k<num.length; k++){
            for(l=k+2; l<=num.length;l++){
                if(num[k]+num[k+1]==num[l]+num[l+1]){
                    bool = true;
                }

            }
        }
        if(bool==false) {
            console.log('<li><span class=\'num\'>' + i + '</span></li>')
        }
        else{
            console.log('<li><span class=\'rakiya\'>' + i+ '</span><a href="view.php?id='+i+'>View</a></li>')
            bool=false;
        }
    }

    console.log('</ul>');

}

solve([
    '5',
    '8'

])