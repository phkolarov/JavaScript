var arr = [

    {name: "Pesho",age: 15,grades:[5,6,2,2]},
    {name: "Serko",age: 12,grades:[2,6,4,5]},
    {name: "Torko",age: 13,grades:[5,3,2,1]},
    {name: "Porko",age: 11,grades:[3,6,3,4]}

];

//for ( var obj in arr){
//
//    console.log( arr[obj]);
//}


for(var key in arr[1].grades){




    console.log((arr[1].grades[key]));
}
