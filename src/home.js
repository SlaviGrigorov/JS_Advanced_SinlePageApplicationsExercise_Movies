import { detailsPage } from './details.js';
import { loggedInUser, showView } from './util.js';

const homeSection = document.querySelector('#home-page');
const catalog = homeSection.querySelector('#movie .card-deck.d-flex.justify-content-center')

catalog.addEventListener('click', (e) => {
    if(e.target.tagName == "BUTTON") {
        e.preventDefault();
        const id = e.target.dataset.id;
        detailsPage(id);
    }
})

export function homePage() {
    showView(homeSection);
    displayMovies();    
}

async function displayMovies(){
    /* Calls getMovies function, which returns array with movies from server data
        movies.map - go through each element from the data
        for each element of the array we call createMoviePreview with each of the arr elements
        when using arr.map(functionName) => calls the specified function with passing the current el
        which in this case is creating new div with specified innerHTML and returns it, thats why we use ...movies, so it will change the array
        from array with html elements, to array of parameters
        catalog.replaceChildren will replace the current catalog movies with the new data
    */
    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMoviePreview));
}

async function getMovies(){
    const res = await fetch('http://localhost:3030/data/movies');
    const data = await res.json();
    return data;
}

function createMoviePreview(movie){
    const divElement = document.createElement('div');
    divElement.className = 'card mb-4';

    divElement.innerHTML = ` 
    <img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
        ${showDetailsButton(movie)}
    `

    return divElement;
}

function showDetailsButton(movie) {
    if(loggedInUser()) {
        return `
        <div class="card-footer">
            <a href="/details/${movie._id}">
                <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
            </a>
        </div>`;
    } else {
        return ``;
    }
}

window.getMovies = getMovies;