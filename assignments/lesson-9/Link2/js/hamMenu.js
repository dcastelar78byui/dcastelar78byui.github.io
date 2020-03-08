const hambutton = document.querySelector (".ham");
hambutton.addEventListener("click",toogleMenu,false);

function toogleMenu () {
    document.querySelector (".navigator").classList.toggle("responsive");
}
