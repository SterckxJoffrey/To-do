const titleElement = document.getElementById('title')
titleElement.addEventListener("click", () => 
    {title.style.color = 'red'}
);


const content = document.querySelector('.test');
content.addEventListener("click", () => 
    {content.classList.toggle("content");}
);


const count = document.querySelector('.count');
let i = 1;
const incrementation = document.querySelector('.incrementation');
incrementation.addEventListener("click", () => {
    count.innerHTML = i;
    i++;
})

const toogle = document.querySelector('.toogle');
toogle.addEventListener("click", () => {
    if (toogle.textContent === 'Afficher'){
        toogle.textContent = 'Cacher';
    } else {
        toogle.textContent = 'Afficher'
    }
})


const toogle2 = document.querySelector('.toogle2');
toogle2.addEventListener("click", () => {
    const onText = toogle2.dataset.on;
    const offText = toogle2.dataset.off;

    toogle2.textContent = toogle2.textContent === offText ? onText : offText;
});


const input = document.getElementById("text");
const button = document.getElementById('button')
const liste = document.getElementById('liste')
button.addEventListener("click", () => {
    const valeur = input.value.trim();

    if (valeur !== '') {
        const li = document.createElement('li');
        li.textContent = valeur;
        liste.appendChild(li);
        input.value = '';
        
    }
});

const test_list = document.getElementById('test-list');
const delete_button = document.getElementById('delete');

delete_button.addEventListener("click", () => {
    const last_item = test_list.lastElementChild;
    console.log(last_item);
    if (last_item) {
        test_list.removeChild(last_item)
    } else {
        alert("La liste est déjà vide")
    }
})


const champ = document.getElementById('champ');
const affichage = document.getElementById('affichage');

champ.addEventListener("input", () => {
    affichage.textContent = champ.value.length;    
})

