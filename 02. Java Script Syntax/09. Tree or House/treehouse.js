
function treeHouseCompare(a, b){

        var house = (a*a)+(a*(a*2/3)/2);
        console.log(house);
        var tree = ((b*(b*1/3) )+ (Math.PI*((b*4/3)/2)*((b*4/3)/2))).toFixed(2);

    console.log(tree)

        var result;

        if(house>tree){
            result=house;
            console.log("house/" + result);

        }

        else{
            result=tree;
            console.log("tree/" + result);

        }

}

console.log(treeHouseCompare(parseFloat(prompt("Enter A")),parseFloat(prompt("Enter B"))))