const container = document.querySelector("#container");
const row1 = document.querySelector("#one");
const row2 = document.querySelector("#two");
const row3 = document.querySelector("#three");
const row4 = document.querySelector("#four");


function makeDivs() {
    for (i = 0; i < 16; i++)
    {
       const div = document.createElement('div');
 
       if (i < 4 ) {
        div.setAttribute("class", "row1")
        row1.appendChild(div);
       } else if (i < 8) {
        div.setAttribute("class", "row2")
        row2.appendChild(div);
       } else if (i < 12) {
        div.setAttribute("class", "row3")
        row3.appendChild(div);
       } else if (i < 16) {
        div.setAttribute("class", "row4")
        row4.appendChild(div);
       }
    }
}


makeDivs();

const div1 = document.querySelector("row1");
const div2 = document.querySelector("row2");
const div3 = document.querySelector("row3");
const div4 = document.querySelector("row4");

let a = 0;

function opacity (div) {
    a++;

    if (a === 1) {
        div.classList.toggle("t1");
    } else if (a == 2) {
        div.classList.toggle("t2");
    } else if (a == 3) {
        div.classList.toggle("t3");
    }
}

div1.addEventListener("mouseover", opacity(div1));
div2.addEventListener("mousover", opacity(div2));
div3.addEventListener("mouseover", opacity(div3));
div4.addEventListener("mouseover", opacity(div4));

