var  values = [3,127,588];

function checker() {
    for (var i in values) {

        var value = values[i];
        if (value % 2 == 0) {

            console.log(true)
        }
        else {
            console.log(false)
        }
    }
}
checker();