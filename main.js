const container = document.getElementById('container');
const clearButton = document.getElementById('clear');
const gridSizeSlider = document.getElementById('gridSize');
const sizeLabel = document.getElementById('sizeLabel');

let gridSize = 16;  


function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.innerHTML = '';  

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);

        
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = '#333';
        });
    }
}


function clearGrid() {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = '#fff';
    });
}


gridSizeSlider.addEventListener('input', () => {
    gridSize = gridSizeSlider.value;
    sizeLabel.textContent = `Grid Size: ${gridSize} x ${gridSize}`;
    createGrid(gridSize);
});


clearButton.addEventListener('click', clearGrid);


createGrid(gridSize);
