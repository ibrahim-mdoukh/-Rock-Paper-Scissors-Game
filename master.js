function game(id) {
    let myelement = document.getElementById(id);
    myelement.classList.add("active");
    play(myelement);
}


function play(_myelement) {
    let ar = ["r", "p", "s"];
    let ran = Math.trunc(Math.random() * 3);
    let ele = document.getElementById(ar[ran]);
    ele.classList.add("active");
    if (ele.id == "r" && _myelement.id == "my-r") { draw(); }
    if (ele.id == "r" && _myelement.id == "my-p") { win(); }
    if (ele.id == "r" && _myelement.id == "my-s") { lose(); }

    if (ele.id == "p" && _myelement.id == "my-r") { lose(); }
    if (ele.id == "p" && _myelement.id == "my-p") { draw(); }
    if (ele.id == "p" && _myelement.id == "my-s") { win(); }

    if (ele.id == "s" && _myelement.id == "my-r") { win(); }
    if (ele.id == "s" && _myelement.id == "my-p") { lose(); }
    if (ele.id == "s" && _myelement.id == "my-s") { draw(); }

    document.getElementById("my-r").removeAttribute("onclick");
    document.getElementById("my-p").removeAttribute("onclick");
    document.getElementById("my-s").removeAttribute("onclick");
}



function win() {
    document.getElementById("result").innerHTML = "you win";
}

function lose() {
    document.getElementById("result").innerHTML = "you lose";
}

function draw() {
    document.getElementById("result").innerHTML = "Draw";
}