const container = document.getElementById("container");

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  for (c = 0; c < (rows * columns); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid";
  };
};

makeGrid(3, 3);

function fillCell(e){
    e.target.style.backgroundColor = "#000000";
}

function removeCellColor(e){
    e.target.style.backgroundColor = "#FFFFFF";
}

function draw (){
    const cells = document.querySelectorAll(".grid");

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', fillCell);
        cell.addEventListener('mouseout', removeCellColor);
    });
}

draw();