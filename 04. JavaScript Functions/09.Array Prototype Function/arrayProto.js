Array.prototype.removeItems = function(value) {
    return this.filter(filterInput);

    function filterInput(v) {
        return v != value;
    }
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr.removeItems(1));

var arr = ['hi', 'bye', 'hello' ];
console.log(arr.removeItems('bye'));