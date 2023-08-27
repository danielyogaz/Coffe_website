// togle class active
const nabarNav = document.querySelector
('.navbar-nav');
//kedtika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    nabarNav.classList.toggle('active');
}

// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !nabarNav.contains(e.target))
    {
        navbarNav.classList.remove('active');
    }

});