// Montre l'annonce après 2 secondes
window.onload = function() {
    setTimeout(function() {
        document.getElementById('annonce').style.display = 'block';
    }, 2000);
};

// Fonction pour fermer l'annonce
document.getElementById('fermer').addEventListener('click', function() {
    document.getElementById('annonce').style.display = 'none';
});

// Fonction pour gérer le clic sur le bouton "En savoir plus"
document.getElementById('action-button').addEventListener('click', function() {
    window.location.href = "file:///E:/site2/html/about.html";  // Lien vers la page de destination
});
