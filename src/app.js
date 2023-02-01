import { loggedInUser, showView, updateNav } from './util.js';
import { homePage } from './home.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { createPage } from './create.js';

console.log("app.js")
const routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': createPage

}

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(event) {
    if(event.target.tagName == 'A' && event.target.href){
        event.preventDefault();
        const url = new URL(event.target.href)
        const view = routes[url.pathname]
        // console.log(routes[url.pathname]);
        if (typeof view == 'function') {
            view()
        }
        console.log(url.pathname);
    }
}

const detailsSection = document.querySelector('#movie-example');
const editSection = document.querySelector('#edit-movie');

function detailsPage() {
    showView(detailsSection);
}
function editPage() {
    showView(editSection);
}
function logout(){
    localStorage.removeItem('user');
    updateNav();
}

// Show Catalogue on startup
updateNav(loggedInUser());
homePage();