// les codes

// window.addEventListener("DOMContentLoaded", function(e){
//     alert("Le DOM fonctionne");
// });


// LE MENU HUMBURGER

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

// Brille ment des liens selon les sections
// Sections
const acceuil = document.querySelector(".hero");
const competences = document.getElementById("Compétences");
const propos = document.getElementById("section_propos");
const contact = document.getElementById("section_contact")
const projets = document.getElementById("section_projet");

// liens
const acceuil_link = document.querySelector(".Acceuil");
const propos_link  = document.querySelector(".propos");
const competences_link = document.querySelector(".competences");
const projets_link = document.querySelector(".projets");
const contact_link  = document.querySelector(".contact");


acceuil.addEventListener("mouseover", function(){
    acceuil_link.classList.add("active");
    competences_link.classList.remove("active");
    projets_link.classList.remove("active");
    contact_link.classList.remove("active");
    propos_link.classList.remove("active");
});

competences.addEventListener("mouseover", function(){
    competences_link.classList.add("active");
    acceuil_link.classList.remove("active");
    projets_link.classList.remove("active");
    contact_link.classList.remove("active");
    propos_link.classList.remove("active");
});

projets.addEventListener("mouseover", function(){
    projets_link.classList.add("active");
    acceuil_link.classList.remove("active");
    competences_link.classList.remove("active");
    contact_link.classList.remove("active");
    propos_link.classList.remove("active");
});

contact.addEventListener("mouseover", function(){
    contact_link.classList.add("active");
    projets_link.classList.remove("active");
    acceuil_link.classList.remove("active");
    competences_link.classList.remove("active");
    propos_link.classList.remove("active");
});

propos.addEventListener("mouseover", function(){
    propos_link.classList.add("active");
    projets_link.classList.remove("active");
    acceuil_link.classList.remove("active");
    competences_link.classList.remove("active");
    contact_link.classList.remove("active");
    
});


