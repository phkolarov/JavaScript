



var input = [38,118,"chocolate", 0.5]

input.push(parseFloat(prompt("Your Years")));
input.push(parseFloat(prompt("Your Max Years")));
input.push(prompt("Your Food"));
input.push(parseFloat(prompt("Your Consumation")));


function resultOne(age,maxAge,food) {
    return   (((input[1] - input[0])*input[3]))*365 + " kg" + " of " + input[3] + " would be enough until I am " + input[1] + " years old";
}

document.getElementById("result").innerHTML = resultOne();
console.log(resultOne());