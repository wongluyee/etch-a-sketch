const container = document.getElementsByClassName("container");

let row;
let column;

function makeGrid(size = 16){
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++){
            column = document.createElement("div");
            container.appendChild(column);
        }

        row = document.createElement("div");
        container.appendChild(row);
    }
}