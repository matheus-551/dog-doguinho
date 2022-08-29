const render = document.getElementById('render');

/** Header & Search */

const header = document.createElement('header');

const title = document.createElement('h1');
title.innerText = 'Dog Doguinho 🐶';

const containerSearch = document.createElement('div');
containerSearch.classList.add('containerSearch');

const inputSearch = document.createElement('select');
inputSearch.name = 'searchDog';
inputSearch.id = 'searchDog';

const options = document.createElement('option');
options.text = 'Selecione uma raça...';
options.value = '';

inputSearch.appendChild(options)

/* ====== List all breeds ====== */

var listAllDogs = [{}];

function fetchAllDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
        Object.keys(data.message).map(dog => {
            const op = document.createElement('option');
            op.text = dog;  
            inputSearch.appendChild(op);
        })
    })
}

const sendButton = document.createElement('button');
sendButton.type = 'button';
sendButton.classList.add('sendButton');
sendButton.innerText = 'search';

containerSearch.appendChild(inputSearch);
containerSearch.appendChild(sendButton);

header.appendChild(title);
header.appendChild(containerSearch);

render.appendChild(header);
render.onload = fetchAllDogBreeds();

const mainContainer = document.createElement('div');
mainContainer.classList.add('container')

const dogBreed = document.createElement('h2');

const imageDog = document.createElement('img');
imageDog.classList.add = 'imgDog'

function searchDog() {
    fetch(`https://dog.ceo/api/breed/${inputSearch.value}/images/random`)
    .then( response => response.json())
    .then( data => {
        dogBreed.innerText = inputSearch.value;
        mainContainer.appendChild(dogBreed);

        imageDog.src = data.message;
        mainContainer.appendChild(imageDog);
    })
}

sendButton.onclick = searchDog;

render.appendChild(mainContainer);