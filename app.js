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
    li.textContent = texte;

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
    checkbox.id = 'done';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('done', checkbox.checked);
    });

    li.prepend(checkbox);
    li.appendChild(buttonSupprimer);
    liste.appendChild(li);
}
