


function printNumbers(number) {

    var result = "";

   search:if(number > 0) {
       for (i = 1; i < number; i++) {

           result += i + ", ";
            if(i== number-1){

                result+=number;

            }
       }
   }
    else{
       result = "no";
       break search;
   }
    console.log(result);
}

printNumbers(20);
printNumbers(-1);
printNumbers(13);

