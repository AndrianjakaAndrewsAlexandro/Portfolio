// les codes

// window.addEventListener("DOMContentLoaded", function(e){
//     alert("Le DOM fonctionne");
// });


// Le mode
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const root = document.documentElement;


moon.addEventListener("click", function() {
    root.style.setProperty("--fond-principal-light", "#0A0A0A");
    root.style.setProperty("--fond-secondaire-light", "rgb(26, 26, 46)");
    root.style.setProperty("--accent-principal-light", "#2563EB");
    root.style.setProperty("--accent-hover-light", "#3B82F6");
    root.style.setProperty("--text-principal-light", "#FFFFFF");
    root.style.setProperty("--text-secondaire-light", "#A0A0A0");
    root.style.setProperty("--jaune", "#FF0");

    moon.style.display = "none";
    sun.style.display = "block";
});

sun.addEventListener("click", function() {
    root.style.setProperty("--fond-principal-light", "#FFFFFF");
    root.style.setProperty("--fond-secondaire-light", "#FFFFFF");
    root.style.setProperty("--accent-principal-light", "#438bff");
    root.style.setProperty("--accent-hover-light", "#438bff");
    root.style.setProperty("--text-principal-light", "#0A0A0A");
    root.style.setProperty("--text-secondaire-light", "#002060");
    root.style.setProperty("--jaune", "rgb(248, 235, 177)");

    sun.style.display = "none";
    moon.style.display = "block";
})







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


