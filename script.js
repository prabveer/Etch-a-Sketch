let gridSize = 16;
var slider = document.getElementById("myRange");
var output = document.getElementById("gridValue");

function start(num)
{
    const gridDiv = document.querySelector(".grid-container");
    gridDiv.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`);
    for(let x = 0; x < num*num; x++)
    {
        const content = document.createElement("div");
        content.classList.add('box');
        gridDiv.appendChild(content);
    }
    const divBoxSelector = document.querySelectorAll("div.box");
    divBoxSelector.forEach((divsOnGrid) => {
        divsOnGrid.addEventListener('mouseover' , () => {
            divsOnGrid.classList.add('box-Colored');
        });
    });
}
start(gridSize);
function resetHit() {
    const divBoxSelector = document.querySelectorAll("div.box");
    divBoxSelector.forEach((divsOnGrid) => {
        divsOnGrid.classList.remove('box-Colored');
    }); 
}
function clear() {
    const divBoxSelector = document.querySelectorAll("div.box");
    divBoxSelector.forEach((divsOnGrid) => {
        divsOnGrid.remove();
    }); 
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + "x" + this.value;
  clear();
  gridSize = this.value;
  start(gridSize);
}
