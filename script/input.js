function showimput() {
    return function() {
        var text = document.getElementById("input").value;
        document.getElementById("answer").innerHTML = 'Hello ' + text;
        if(!text) {
            document.getElementById("answer").innerHTML = '';
        };
    };
}

document.getElementById("input").oninput=showimput();