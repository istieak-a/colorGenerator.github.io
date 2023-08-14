window.onload = function () {
    main(); 
}; 

function main() {
    const root = document.getElementById('backgrnd')
    const btn = document.getElementById('btn-cl')
    const h1 = document.getElementById('head')
    const h3 = document.getElementById('color-code')
    const copyright = document.getElementById('copyrightt')

    btn.addEventListener('click', function() {
        const bgColor = generateRgbColor(); 
        root.style.backgroundColor = bgColor;
        copyright.style.backgroundColor = bgColor;
        btn.style.color = bgColor;
        h1.style.color = bgColor;
        h3.innerText = bgColor;
        navigator.clipboard.writeText(bgColor);
    })
}; 

function generateRgbColor() {
    const red = Math.floor(Math.random() * 255); 
    const green = Math.floor(Math.random() * 255); 
    const blue = Math.floor(Math.random() * 255); 

    return `rgb(${red}, ${green}, ${blue})`
}
