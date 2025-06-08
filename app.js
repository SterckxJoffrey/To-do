let taches = [];

// D'abord : toutes les références DOM
const input = document.getElementById('text');
const button = document.getElementById('save');
const liste = document.getElementById('to_do_list');

// Ensuite : récupérer les données du localStorage
const donneesStockees = localStorage.getItem("taches");

if (donneesStockees) {
    taches = JSON.parse(donneesStockees);
    taches.forEach(texte => {
        ajouterTacheDOM(texte);
    });
}

// Ensuite : gestion du clic pour ajouter une tâche
button.addEventListener("click", () => {
    const valeur = input.value.trim();
    if (valeur === '') {
        alert("Veuillez rentrer une note");
        return;
    }

    ajouterTacheDOM(valeur);
    taches.push(valeur);
    localStorage.setItem("taches", JSON.stringify(taches));

    input.value = '';
    input.focus();
});

// Fonction pour ajouter une tâche dans le DOM
function ajouterTacheDOM(texte) {
    const li = document.createElement('li');

    // On crée un span pour le texte, pour pouvoir styliser uniquement le texte
    const spanTexte = document.createElement('span');
    spanTexte.textContent = texte;

    const buttonSupprimer = document.createElement('button');
    buttonSupprimer.textContent = '❌';
    buttonSupprimer.classList.add('supprimer');
    buttonSupprimer.addEventListener("click", () => {
        liste.removeChild(li);
        taches = taches.filter(t => t !== texte);
        localStorage.setItem("taches", JSON.stringify(taches));
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        // On applique la classe done uniquement au span du texte
        spanTexte.classList.toggle('done', checkbox.checked);
    });

    li.prepend(checkbox);
    li.appendChild(spanTexte);
    li.appendChild(buttonSupprimer);
    liste.appendChild(li);
}
