function biggerThanNeighbors(index,  arr) {

        if(arguments[0]<= arguments[1].length-1 && arguments[0] !=0) {
            if (arguments[1][arguments[0]] > arguments[1][arguments[0] - 1] && arguments[1][arguments[0]] > arguments[1][arguments[0] + 1]) {

                console.log("is bigger");
            }
            else {
                console.log("not bigger");
            }
        }
        else if(arguments[0]==(arguments.length-1) || arguments[0]==0){
            console.log("only one neighbor");
        }
            else{
            console.log("invalid index");
        }

}


biggerThanNeighbors(2, [1, 2, 2, 6, 4]);
biggerThanNeighbors(2, [1, 2, 5, 3, 4]);
biggerThanNeighbors(5, [1, 2, 5, 3, 4]);
biggerThanNeighbors(0, [1, 2, 5, 3, 4]);