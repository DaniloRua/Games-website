let body = document.body
let loader = document.getElementById('loader');
const bars = document.querySelector('.bars-menu-icon');
const barsMenu = document.querySelector('.bars-menu');
window.addEventListener('load', vanish)

function vanish(){
    loader.classList.add('vanish')
}
function openMenu()
{
    bars.classList.toggle('open-menu')
    barsMenu.classList.add('open-bars-menu')
}

