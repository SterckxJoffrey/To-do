// console.log("coucuo");

// function saveText(action) {
//     action = document.querySelector("#action");
    
    
    
    
    
// }


// button = document.querySelector("#button");
// console.log(button);

// button.addEventListener("click" , () => {saveText(action)})

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
