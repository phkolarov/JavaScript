function createArray(){
var ArrayString = ""
var Array = [];

for(i=0; i<=20;i++){

    Array.push(i*5);
}
console.log(Array.join(" "));
}
createArray();