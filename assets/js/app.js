var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('nav .link');
const header = document.querySelector('#vanta');
const workBtn = document.querySelector('.work-link');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
    header.classList.toggle('skew');
})



header.addEventListener('click', () => {
    toggleBtn.classList.remove('active');
    ul.classList.remove('active');
    header.classList.remove('skew');
})

workBtn.addEventListener('click', () => {
    window.location.href = 'work.html';
})



