const grid = document.createElement('div')
grid.classList.add('grid');

const body = document.querySelector('body')


for (let i=0;i<16*16;i++) {
    const box = document.createElement('div');
    box.classList.add("box");
    grid.appendChild(box);
}
// console.log(body)
body.appendChild(grid);

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', () => {
    box.classList.add("hover");
}));

function toggleClass(e) {
    this.classList.toggleClass("hover")
}