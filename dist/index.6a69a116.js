var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});
const toggleBtn = document.querySelector('.toggle-btn');
const ul = document.querySelector('nav .link');
const header = document.querySelector('#vanta');
const workBtn = document.querySelector('.work-link');
toggleBtn.addEventListener('click', ()=>{
    toggleBtn.classList.toggle('active');
    ul.classList.toggle('active');
    header.classList.toggle('skew');
});
header.addEventListener('click', ()=>{
    toggleBtn.classList.remove('active');
    ul.classList.remove('active');
    header.classList.remove('skew');
});
workBtn.addEventListener('click', ()=>{
    window.location.href = 'work.html';
});
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    ease: 'none'
});
const tl = gsap.timeline();
tl.from('.intro', {
    yPercent: 100
}).from('.about', {
    yPercent: 100
});
ScrollTrigger.create({
    animation: tl,
    trigger: '#main-view',
    start: 'top top',
    end: 'bottom -100%',
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    ease: 'none'
});

//# sourceMappingURL=index.6a69a116.js.map
