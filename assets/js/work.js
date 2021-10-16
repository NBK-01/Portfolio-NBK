var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})


const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('nav .link');
const header = document.querySelector('#work');


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



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });



