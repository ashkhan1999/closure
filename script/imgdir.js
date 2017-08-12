function picdir(dir) {
    return function() {
        return document.getElementById("pic").style.textAlign=dir;
    }
}

document.getElementById("left").onclick=picdir("left");
document.getElementById("center").onclick=picdir("center");
document.getElementById("right").onclick=picdir("right");