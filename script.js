let defaultgrid = 16;
function start(num)
{
    const gridDiv = document.querySelector(".grid-container");
    for(let x = 0; x < num*num; x++)
    {
        const content = document.createElement("div");
        content.classList.add('box');
        gridDiv.appendChild(content);
    }
}
start(defaultgrid);

const divBoxSelector = document.querySelectorAll("div.box");
divBoxSelector.forEach((divsOnGrid) => {
    divsOnGrid.addEventListener('mouseover' , () => {
        divsOnGrid.classList.add('box-Colored');
    });
});

