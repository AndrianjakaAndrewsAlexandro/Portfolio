const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  // Ajoute ou enlève la classe au clic
  document.body.classList.toggle('dark-theme');
  
  // Optionnel : Sauvegarder le choix de l'utilisateur
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Appliquer le thème sauvegardé au chargement de la page
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}