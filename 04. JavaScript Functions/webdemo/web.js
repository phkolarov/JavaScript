function sorting(kandidati){
    var obj = kandidati.slice(0).sort(function(a,b){return a.points < b.points});
    return console.log(obj);
}


var kandidati =[
    {fname: "Cvetina", lname: "Belovska", age: 26, points: 2140},
    {fname: "Alexandra", lname: "Belovska", age: 72, points: 2130},
    {fname: "Filip", lname: "KOlarov", age: 33, points: 3140},
    {fname: "Machone", lname: "Mechevski", age: 46, points: 2440}
];
sorting(kandidati);