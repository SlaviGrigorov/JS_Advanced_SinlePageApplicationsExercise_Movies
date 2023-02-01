import { homePage } from './home.js';
import { showView } from './util.js';

const createSection = document.querySelector('#add-movie');
const form = createSection.querySelector('form');
form.addEventListener('submit', onSubmit);

export function createPage() {
    showView(createSection);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const image = formData.get('imageUrl');

    if(title.length < 2 || description.length == 0 || image.length == 0) {
        alert('Please fill all fields!')
    } else {
        await addMovie(title, description, image);
        form.reset();
        homePage();
    }
}

async function addMovie(title, description, img) {


    const user = JSON.parse(localStorage.getItem('user'));
    await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({ title,description,img })
    });

}