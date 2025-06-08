let taches = [];

// D'abord : toutes les références DOM
const input = document.getElementById('text');
const button = document.getElementById('save');
const liste = document.getElementById('to_do_list');

// Ensuite : récupérer les données du localStorage
const donneesStockees = localStorage.getItem("taches");

if (donneesStockees) {
    taches = JSON.parse(donneesStockees);
    taches.forEach(tache => {
        ajouterTacheDOM(tache);
    });
}

button.addEventListener("click", () => {
    const valeur = input.value.trim();
    if (valeur === '') {
        alert("Veuillez rentrer une note");
        return;
    }

    const nouvelleTache = { texte: valeur, done: false };
    taches.push(nouvelleTache);
    localStorage.setItem("taches", JSON.stringify(taches));

    ajouterTacheDOM(nouvelleTache);

    input.value = '';
    input.focus();
});

// Fonction pour ajouter une tâche dans le DOM
function ajouterTacheDOM(tache) {
    const li = document.createElement('li');

    // Span pour le texte
    const spanTexte = document.createElement('span');
    spanTexte.textContent = tache.texte;
    if (tache.done) {
        spanTexte.classList.add('done');
    }

    const buttonSupprimer = document.createElement('button');
    buttonSupprimer.textContent = '❌';
    buttonSupprimer.classList.add('supprimer');
    buttonSupprimer.addEventListener("click", () => {
        liste.removeChild(li);
        taches = taches.filter(t => t !== tache);
        localStorage.setItem("taches", JSON.stringify(taches));
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tache.done;
    checkbox.addEventListener('change', () => {
        spanTexte.classList.toggle('done', checkbox.checked);
        // Mettre à jour l'état dans le tableau et dans localStorage
        tache.done = checkbox.checked;
        localStorage.setItem("taches", JSON.stringify(taches));
    });

    li.prepend(checkbox);
    li.appendChild(spanTexte);
    li.appendChild(buttonSupprimer);
    liste.appendChild(li);
}
