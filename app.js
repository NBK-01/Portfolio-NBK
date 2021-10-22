var $52f0b8d4f67f85b3$var$loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    $52f0b8d4f67f85b3$var$loader.style.display = "none";
});
const $52f0b8d4f67f85b3$var$toggleBtn = document.querySelector('.toggle-btn');
const $52f0b8d4f67f85b3$var$ul = document.querySelector('nav .link');
const $52f0b8d4f67f85b3$var$header = document.querySelector('#vanta');
const $52f0b8d4f67f85b3$var$workBtn = document.querySelector('.work-link');
$52f0b8d4f67f85b3$var$toggleBtn.addEventListener('click', ()=>{
    $52f0b8d4f67f85b3$var$toggleBtn.classList.toggle('active');
    $52f0b8d4f67f85b3$var$ul.classList.toggle('active');
    $52f0b8d4f67f85b3$var$header.classList.toggle('skew');
});
$52f0b8d4f67f85b3$var$header.addEventListener('click', ()=>{
    $52f0b8d4f67f85b3$var$toggleBtn.classList.remove('active');
    $52f0b8d4f67f85b3$var$ul.classList.remove('active');
    $52f0b8d4f67f85b3$var$header.classList.remove('skew');
});
$52f0b8d4f67f85b3$var$workBtn.addEventListener('click', ()=>{
    window.location.href = 'work.html';
});


//# sourceMappingURL=app.js.map
