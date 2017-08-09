function showimput() {
    return function() {
        var text = document.getElementById("input").value;
        document.getElementById("answer").innerHTML = 'Hello ' + text;
    };
}

document.getElementById("input").oninput=showimput();