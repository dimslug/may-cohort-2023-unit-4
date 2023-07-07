import apiKey from './keys.js';
//! Global Variables
const baseURL = `https://api.spoonacular.com/recipes/random`;
/* 
const key = `?apiKey=${apiKey}`;
const tag = `eggs`
sample url: 
https://api.spoonacular.com/recipes/random?apiKey=YOUR-API-KEY-VALUE

*/
let buildURL = `${baseURL}?apiKey=${apiKey}`;
let storedRecipes = [];
/* 
let searchRandom = `${baseURL}?apiKey=${apiKey}&tags=${tag}`; // how to add on
let buildURL2 = `${baseURL}${key}&tags=${tag}`; // option to build URL

console.log(apiKey)
*/
const searchForm = document.getElementById('search-form');

//! Functions
const removeElements = element => {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const setTable = () => {
    console.log(`Stored Recipes Array:`, storedRecipes);

    const keptCards = document.getElementById('kept-cards');

    removeElements(keptCards);

    storedRecipes.map(obj => {
        //* Create
        let div = document.createElement('div');
        let card = document.createElement('div');
        let img = document.createElement('img');
        let body = document.createElement('div');
        let title = document.createElement('h5');
        let p = document.createElement('p');
        let a = document.createElement('a');
    
        //* Attributes 
        div.className = 'col';
        card.className = 'card';
        img.className = 'card-img-top';
        img.src = obj.img; // src from an object from array
        img.alt = obj.title; // src from object from array
        body.className = 'card-body';
        title.className = 'card-title';
        title.textContent = obj.title; // from object
        p.className = 'card-text';
        a.href = obj.src; // from object
        a.target = '_blank';
        a.textContent = 'Link to Recipe';
    
        //* Attach
        p.appendChild(a);
        body.appendChild(title);
        body.appendChild(p);
        div.appendChild(card);
        div.appendChild(img);
        div.appendChild(body);
    
        keptCards.appendChild(div);

    })

}

const displayRandomCard = recipe => {
    // console.log(recipe);
    const randomCard = document.querySelector('.random-card');

    removeElements(randomCard);
    // while(randomCard.firstChild) {
    //     randomCard.removeChild(randomCard.firstChild);
    // }

    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let btn = document.createElement('a');
    
    //* Set Attributes
    card.className = 'card';
    card.style.width = "18rem";
    img.src = recipe.img;
    img.className = 'card-img-top';
    img.alt = `An image of ${recipe.title}`;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = recipe.title;
    btn.className = 'btn btn-success';
    btn.textContent = "Add";
    btn.onclick = () => {
        // console.log('clicked!')
        storedRecipes.push(recipe);
        setTable();
    }

    //* Attach (append) Elements
    body.appendChild(title);
    body.appendChild(btn);

    card.appendChild(img);
    card.appendChild(body);

    randomCard.appendChild(card);

}

//! Listening Events
searchForm.addEventListener('submit', e => {
    e.preventDefault(); // stops our page from refreshing due to default properties of our form.

    // fetch(baseURL)
    fetch(buildURL)
    // fetch(searchRandom)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => {
            // console.log(data);
            let recipe = data.recipes[0]; // pathway to a recipe from the API.

            // console.log(recipe);

            let obj = {
                title: recipe.title,
                // title: data.recipes[0].title,
                img: recipe.image,
                src: recipe.sourceUrl
            }

            displayRandomCard(obj);

        })
        .catch(err => console.error(err));
    
})
