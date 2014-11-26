
var input = [333,425,2567564754];
var position = 3;

for(var i in input)
{

   var result = (input[i]>>position) & 1;
    console.log(result == 1);
}

