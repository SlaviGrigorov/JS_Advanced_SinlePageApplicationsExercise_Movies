import { loggedInUser, showView } from "./util.js";

const section = document.querySelector('#movie-example');

export function detailsPage(id) {
    showView(section);
    displayMovie(id);
}

async function displayMovie(id){
    const userId = loggedInUser()._id;
    const[movie, likes, liked] = await Promise.all([
        getMovie(id),
        getLikes(id),
        alreadyLiked(id, userId),
    ])

    section.replaceChildren(createMovieCard(movie, likes, liked));
}

async function getMovie(id) {
    const res = await fetch(`http://localhost:3030/data/movies/${id}`);
    const movie = await res.json();

    return movie;
}

function createMovieCard(movie, likes, liked) {
    const divElement = document.createElement('div');
    divElement.className = 'container';
    divElement.innerHTML = `<div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail" src="${movie.img}" alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${movie.description}</p>
        ${createControls(movie, likes, liked)}
    </div>
</div>`

const likeButton = divElement.querySelector('.like-btn');
if(likeButton) {
    likeButton.addEventListener('click', (e) => likeMovie(e, movie._id));
}

return divElement;
}


function createControls(movie, likes, liked) {
    const user = loggedInUser();
    const isOwner = user && user._id == movie._ownerId;

    if (isOwner) {
        return `
        <a class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="#">Edit</a>
        `;
    } else if(!liked){
        return `<a class="btn btn-primary like-btn" href="#">Like</a>`;
    } else {
        return `<span class="enrolled-span">Liked ${likes}</span>`;
    }
}

async function getLikes(movieId) {
    const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
    const likes = await res.json();

    return likes;
}

async function alreadyLiked(movieId, userId) {
    const res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22 `);
    const liked = await res.json();

    return liked.length > 0;
}

async function likeMovie(e, movieId) {
    e.preventDefault();
    const accessToken = loggedInUser().accessToken;
    
    await fetch(`http://localhost:3030/data/likes`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken,
        },
        body: JSON.stringify({movieId}),
    });

    detailsPage(movieId);
}