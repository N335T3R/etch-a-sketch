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

