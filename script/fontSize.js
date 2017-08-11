function fontSize() {
    return function() {
        var size = document.getElementById("sizeSelector").value;
        document.getElementById("fontDemo").innerHTML = 'This text\'s size is ' + size + 'px';
        document.getElementById("fontDemo").style.fontSize = size + 'px';
    }
}

var size = document.getElementById("sizeSelector").value;
document.getElementById("fontDemo").innerHTML = 'This text\'s size is ' + size + 'px';
document.getElementById("fontDemo").style.fontSize = size + 'px';
document.getElementById("sizeSelector").onchange=fontSize();