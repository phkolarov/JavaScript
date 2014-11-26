function stars(args){

    var star1 = args[0].split(" ");
    var star2 = args[1].split(" ");
    var star3 = args[2].split(" ");
    var normandy = args[3].split(" ").map(function(e){return parseFloat(e);});
    var moves = parseFloat(args[4]);

    var starsnames = [star1[0], star2[0], star3[0]];

    var starcordinatesX = [star1[1], star2[1], star3[1]].map(function(e){return parseFloat(e);});
    var starcordinatesY =[star1[2], star2[2], star3[2]].map(function(e){return parseFloat(e);});

    for(i=normandy[1]; i<=normandy[1]+moves;i++){


        if(normandy[0]>=starcordinatesX[0]-1 && normandy[0]<=starcordinatesX[0]+1 && i>=starcordinatesY[0]-1 && i<=starcordinatesY[0]+1){

            console.log(starsnames[0].toLowerCase());
        }
        else if(normandy[0]>=starcordinatesX[1]-1 && normandy[0]<=starcordinatesX[1]+1 && i>=starcordinatesY[1]-1 && i<=starcordinatesY[1]+1){

            console.log(starsnames[1].toLowerCase());
       }
       else if(normandy[0]>=starcordinatesX[2]-1 && normandy[0]<=starcordinatesX[2]+1 && i>=starcordinatesY[2]-1 && i<=starcordinatesY[2]+1){

            console.log(starsnames[2].toLowerCase());
       }
        else{
            console.log("space")
        }

    }


}

//stars(["Sirius 3 7", "Alpha-Centauri 7 5", "Gamma-Cygni 10 10","8 1","6"]);
stars(["star01 16 16", "star02 20 20", "star03 14.5 8","15.5 16.1","1"]);
//stars(["Sirius 3 7", "Alpha-Centauri 7 5", "Gamma-Cygni 10 10","8 1","6"]);
