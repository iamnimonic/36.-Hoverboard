const container = document.querySelector('.container')

for (let i = 0; i < 500; i++){
    let name = 'cell'+i
    let cell_el = document.createElement('div')
    cell_el.classList.add('cell')
    container.appendChild(cell_el)
}

const cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover', setColor)
    cell.addEventListener('mouseleave', removeColor)
})

function setColor() {
    let color = randomColor({luminosity: 'light', hue: 'green'})
    this.style.backgroundColor = color
    this.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor() {
    this.style.backgroundColor = `rgb(23, 24, 23)`
    this.style.boxShadow = `0 0 2px black`
}
