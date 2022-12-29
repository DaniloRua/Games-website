let body = document.body
let loader = document.getElementById('loader');

window.addEventListener('load', vanish)

function vanish(){
    loader.classList.add('vanish')
   // loader.remove()
}