var arr = [10, "cigari", "i", 2, "miliona leva"];
console.log(arr.length);

    arr.push("more coca");
console.log(arr);           //add element after all;

var joined = arr.join("");
console.log(joined);        //submit all elements of array;

arr.pop() // remove the last element;
console.log(arr);


var arr1 = new Array(10); // 10 empty elements of new Array;

arr.reverse();
console.log(arr);           //reverse elements of array;

arr.shift();              //remove first element of array;
console.log(arr);

arr.unshift("more coca");              //add new element at the beginning of the array;
console.log(arr);

var array = [1,5,7,9,10,3,8,4,2,6];
array.sort(function(a,b){return a<b});      //sort numbers like i want with function;
console.log(array);

var arko = array.slice(0);                  //with .slice(0) copy array
console.log(arko);

var alko = ["banana", "cherry", "mango"];      //cutt array like i want;
alko = alko.slice(0,2);
console.log(alko);

var marko = arko.concat(alko)                  //sum two or more array one after one;
console.log(marko);

var varko = marko.join("");                    // ЗАЛЕПВА...Concatenates the elements of the array;
console.log(varko);


//!!!!!!!!!IMPORTART: HOW TO DELETE NULLABLE OR UNDEFINED ELEMENTS FROM ARRAY;!!!!!!!!!!!!!
var someArray = [1, 2 ,402, null, undefined, 1230, null, 0, 0, ""];
someArray2 = someArray.filter(function(e){
    if(e != undefined || e != null){
        return true;
    }
    return  false});
console.log(someArray2);

//!!!!!!!!!!!!!FOR UPPER CASE YOU CAN FILTER BY CONDITION;!!!!!!!!!!!!!!!!!!!!!!!!!
var someArray3 = someArray2.filter(function (a) {return a%2==0 && a!=0});
console.log(someArray3);

//!!!!!!!!! FOR EACH ELEMENT OF ARRAY YOU PUT A CONDITION!!!!!!!!
someArray3.forEach(function(a){if(a%2==0){console.log(a)}});


console.log(someArray.indexOf(null)); // search ID of element by element; //lastIndexOf;


var str = "Imalo edno vreme edin dqdo"; /// REPLACE CURRENT WORD IN STRING;
var str2= "baba";
var str3 = str.replace("dqdo",str2);
console.log(str3);



//!!!!! IMPORTANT REGEX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


var string = str.search("edno");
console.log(string); //Shows start position of current regex or word;

var str = "Filip Kolarov";                  //CUTTING STRING FROM TO LETTER;
var result = "P"+ str.substring(1,13);

str.indexOf("i",2);                         //search letter index ;


///!!!!!!!!!!!RETURN LARGEST ARGUMENT EASY WAY!!!!
function largest() {
    return Math.max.apply(Math, arguments);

}
console.log(largest(2,3,5));

Math.abs(); //Absolute Number;

//!!!!!!!!!!!!!!!!COPY ARGUMENTS IN ARRAY!!!!!!!!!!!!!!!!
function logArguments() {
    var args = [].slice.apply(arguments);
    args.push("test");
    console.info(args);
}

logArguments(1,2,23,"ala bala");