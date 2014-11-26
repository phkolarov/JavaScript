(function displayProperties() {
    var sortedProperties = Object.keys(document).sort(function (a, b) {
        return a.localeCompare(b);
    });
    for (var i = 0, len = sortedProperties.length; i < len; i++) {
        console.log(sortedProperties[i]);
    }
}());