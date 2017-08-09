function bcolor(color) {
    return function() {
        return document.body.style.backgroundColor=color;
    };
}

document.getElementById("blue").onclick=bcolor("blue");
document.getElementById("green").onclick=bcolor("green");
document.getElementById("red").onclick=bcolor("red");
document.getElementById("yellow").onclick=bcolor("yellow");
document.getElementById("pink").onclick=bcolor("palevioletred");