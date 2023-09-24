const body = document.querySelector('body')
const button = document.createElement('button')
button.textContent = "Change tile count"
button.style.cssText = "display: block; margin: 0 auto"
body.appendChild(button);

gridDimension = 720; //px

createGrid();


function createGrid(tilesPerRow = 16) {
    const grid = document.createElement('div')
    grid.style.cssText = `width: ${gridDimension}px;
        height: ${gridDimension}px;
        display: flex;
        flex-wrap: wrap;
        border: 2px solid palevioletred;
        margin: 0 auto;
        margin-top: 20px`;
    grid.classList.add('grid')
    
    
    for (let i=0;i < tilesPerRow*tilesPerRow ;i++) { 
        const tile = document.createElement('div');
        tile.style.cssText = `width: ${gridDimension/tilesPerRow}px; height: ${gridDimension/tilesPerRow}px;`;

        grid.appendChild(tile);
        tile.addEventListener('mouseover', () => changeColor(tile))


    }

    body.appendChild(grid);

}


button.addEventListener('click', () => {
    let tilesPerRow = window.prompt("Set tile count per row");
    body.removeChild(document.querySelector('.grid'));
    createGrid(tilesPerRow)
});

function changeColor(tile) {
    tile.style.background = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
}