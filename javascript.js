const grid = document.createElement('div')
grid.classList.add('grid');

const body = document.querySelector('body')


for (let i=0;i<16*16;i++) { 
    const tile = document.createElement('div');
    tile.classList.add("tile");
    grid.appendChild(tile);
}

body.appendChild(grid);

const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => tile.addEventListener('mouseover', () => {
    tile.classList.add("hover");
}));

