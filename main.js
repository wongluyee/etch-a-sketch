const container = document.getElementById("container");
const changeGridBtn = document.getElementsByClassName("change-grid");

function makeGrid(rows = 16, columns = 16) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  for (c = 0; c < (rows * columns); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid";
  };
};

makeGrid();

function fillCell(e){
    e.target.style.backgroundColor = "#000000";
}

function draw (){
    const cells = document.querySelectorAll(".grid");

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', fillCell);
    });
}

draw();

//Remove all the cells for changing grid
function removeGrid(){
    const cells = document.querySelectorAll(".grid");

    cells.forEach((cell) => {
        cell.remove();
    });
}

//Remove all the cells first, then create a new one.
//draw() function in the end so that user can draw on the new grid.
function changeGrid(){
    let input = prompt("Please enter the new grid.");

    //So that if user click cancel, the grid would not disappear
    if (input === null) return;

    //Check the input, if it is not a number or it is more than 100, alert an error message and jump out of function.
    if (isNaN(input)) {
        alert("Please enter a number.");
        return;
    } else if (input > 99) {
        alert("Please enter number less than 100.");
        return;
    } else {
        removeGrid();
        makeGrid(input,input);
        draw();
    }
}

function clearGrid(){
    const cells = document.querySelectorAll(".grid");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "#FFFFFF";
    });
}