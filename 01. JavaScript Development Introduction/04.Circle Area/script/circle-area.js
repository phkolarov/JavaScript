/**
 * Created by Fill on 9.11.2014 г..
 */

function result(){

var r = document.getElementById("circleArea").value;
var result = Math.PI*Math.pow(r,2);
document.getElementById("result").innerHTML = "r="+r+"; " +"area= "+result+";";

}