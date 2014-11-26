
function KwToHp(){
    var kwatts = document.getElementById("kWatt").value;
    var Result = (kwatts * 1.34102209).toFixed(2);
    document.getElementById("results").innerHTML = Result;

}

