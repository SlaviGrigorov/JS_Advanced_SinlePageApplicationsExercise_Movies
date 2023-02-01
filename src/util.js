const views = [...document.querySelectorAll('.view-section')];

function hideAll() {
    views.forEach(v => v.style.display = "none");
}

export function showView(section) {
    hideAll();
    section.style.display = "block"
}

export function loggedInUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}

export function updateNav(user) {
    const usersVisibleElements = document.querySelectorAll('.user');
    const guestsVisibleElements = document.querySelectorAll('.guest');
    if (user) {
        usersVisibleElements.forEach(u => u.style.display = "inline");
        guestsVisibleElements.forEach(u => u.style.display = "none");
        document.querySelector('ul li a').textContent = `Welcome, ${user.email}`;
    } else {
        usersVisibleElements.forEach(u => u.style.display = "none");
        guestsVisibleElements.forEach(u => u.style.display = "inline");
    }
}