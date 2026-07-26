// les codes

// window.addEventListener("DOMContentLoaded", function(e){
//     alert("Le DOM fonctionne");
// });

const hamburger = document.getElementById("hamburger");
const menu_cache = document.getElementById("menu_cache");
const fermer_menu_cache = document.getElementById("fermer_menu_cache");
const overflow = document.getElementById("overflow");

function apparait(){
    menu_cache.classList.add("afficher");
    overflow.classList.add("active");
}

function dispparait(){
    menu_cache.classList.remove("afficher");
    overflow.classList.remove("active");
}

hamburger.addEventListener("click", apparait);
fermer_menu_cache.addEventListener("click", dispparait);
overflow.addEventListener("click", dispparait);