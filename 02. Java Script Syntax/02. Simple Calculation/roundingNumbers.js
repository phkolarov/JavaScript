
function floatCalc(){
   var floatingNum = document.getElementById("floatNum").value;
   var floorNum = Math.floor(floatingNum);
    var roundNum = Math.round(floatingNum);

    document.getElementById("resultsFloor").innerHTML = floorNum;
    document.getElementById("resultsRound").innerHTML = roundNum;

}