
var button = document.getElementById('button');
function changeValue() {
    var likeUnlike = button.innerText == "Like" ? "Unlike" : "Like";
    button.innerText = likeUnlike;
}