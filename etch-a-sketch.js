//# of rows = user input
const container = document.querySelector("#container");
let i = prompt("How many squares");
let rows = [];
totalSquare = 900;

for (let a = 0; a < i; a++) {
    rows[a] = document.createElement("div");
    rows[a].setAttribute("class", "one");
    rows[a].style.height = totalSquare / i + "px";
    container.appendChild(rows[a]);
}


//# of squares per row = user input
let divs = [];

function makeDivs(array) {  
    for (let a = 0; a < i; a++) {
        divs[a] = document.createElement("div");
        divs[a].setAttribute("class", "t1");
        divs[a].style.width = totalSquare / i + "px";
        array.appendChild(divs[a]);
    }
};

rows.forEach(makeDivs);


//Individualizes squares as array items
let squares = document.querySelectorAll(".t1");

//Color randomization code
function changeColor() {
function getNumber(min, max) {
    min = Math.ceil(0);
    max = Math.floor(257);
    return Math.floor(Math.random() * (max - min) + min);
}

let cValues = [];

for (let a = 0; a < 3; a++) {
    cValues[a] = getNumber();
}

rgb = "rgb(" + cValues.toString() + ")";
return rgb;
}


//Opacity and color change applied to squares
for (let a = 0; a < i * i; a++) {
    squares[a].addEventListener("mouseenter", function(){
        let test = squares[a].getAttribute("class");

        if (test == "t1") {
            squares[a].setAttribute("class", "t2");
            squares[a].style.backgroundColor = changeColor();
        } else if (test == "t2") {
            squares[a].setAttribute("class", "t3");
            squares[a].style.backgroundColor = changeColor();
        } else if (test == "t3") {
            squares[a].setAttribute("class", "t4");
            squares[a].style.backgroundColor = changeColor();
        } else if (test == "t4") {
            squares[a].setAttribute("class", "t5");
            squares[a].style.backgroundColor = changeColor();
        } else if (test == "t5") {
            squares[a].setAttribute("class", "t6");
            squares[a].style.backgroundColor = changeColor();
        } else if (test == "t6") {
            squares[a].setAttribute("class", "t7");
            squares[a].style.backgroundColor = changeColor();
        } else if (test == "t7") {
            squares[a].setAttribute("class", "t8");
            squares[a].style.backgroundColor = changeColor();
        } else if (test == "t8") {
            squares[a].setAttribute("class", "t9");
            squares[a].style.backgroundColor = changeColor();
        } else if (test == "t9") {
            squares[a].setAttribute("class", "t10");
            squares[a].style.backgroundColor = changeColor();
        } else if (test =="t10") {
            squares[a].setAttribute("class", "t11");
            squares[a].style.backgroundColor = changeColor();
        }
        });

}


