

function calcCylinder(radius,height){

    return Math.PI*(radius * radius)*height;
}



console.log(calcCylinder( parseFloat(prompt("Enter a Radius")),parseFloat( prompt("Enter a height"))).toFixed(3));

