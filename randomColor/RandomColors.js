const button = document.querySelector('button')
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
    const newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

function makeRandomColor() {
    const r = Math.floor(Math.random() * 255) + 1
    const g = Math.floor(Math.random() * 255) + 1
    const b = Math.floor(Math.random() * 255) + 1
    return `rgb(${r},${g},${b})`
}