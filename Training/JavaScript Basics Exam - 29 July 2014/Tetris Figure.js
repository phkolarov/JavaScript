function solve(input) {


    var tetriminos = {"I": 0, "L": 0, "J": 0, "O": 0, "Z": 0, "S": 0, "T": 0};

    for (i = 0; i < input.length; i++) {
        for (k = 0; k < input[0].length; k++) {

            if (input[i][k] == 'o' && input[i + 1] != undefined && input[i + 2] != undefined && input[i + 3] != undefined) {


                if (input[i][k] == input[i + 1][k] && input[i][k] == input[i + 2][k] && input[i][k] == input[i + 3][k]) {

                    tetriminos['I'] += 1;
                }

            }

            if (input[i][k] == 'o' && input[i + 1] != undefined && input[i + 2] != undefined) {

                if (input[i][k] == input[i + 1][k] && input[i][k] == input[i + 2][k] && input[i + 2][k] == input[i + 2][k + 1]) {
                    tetriminos['L'] += 1;
                }

            }

            if (input[i][k] == 'o' && input[i + 1] != undefined && input[i + 2] != undefined) {

                if (input[i][k] == input[i + 1][k] && input[i][k] == input[i + 2][k] && input[i][k] == input[i + 2][k - 1]) {
                    tetriminos['J'] += 1;
                }

            }

            if (input[i][k] == 'o' && input[i + 1] != undefined ) {

                if (input[i][k] == input[i + 1][k] && input[i+1][k] == input[i+1][k+1] && input[i+1][k+1]== input[i][k+1]) {
                    tetriminos['O'] += 1;
                }

            }

            if (input[i][k] == 'o' && input[i + 1] != undefined ) {

                if (input[i][k]==input[i][k+1]&&input[i][k+1]== input[i+1][k+1] && input[i+1][k+1]== input[i+1][k+2]) {
                    tetriminos['Z'] += 1;
                }

            }

            if (input[i][k] == 'o' && input[i + 1] != undefined ) {

                if (input[i][k]==input[i][k+1]&&input[i][k]== input[i+1][k] && input[i+1][k]== input[i+1][k-1]) {
                    tetriminos['S'] += 1;
                }
            }

            if (input[i][k] == 'o' && input[i + 1] != undefined ) {

                if (input[i][k]==input[i][k+1]&&input[i][k]== input[i][k+2] && input[i][k+1]== input[i+1][k+1]) {
                    tetriminos['T'] += 1;
                }
            }
        }
    }


    console.log(JSON.stringify(tetriminos));

}

solve(["--o--o-",
    "--oo-oo",
    "ooo-oo-",
    "-ooooo-",
    "---oo--"]);