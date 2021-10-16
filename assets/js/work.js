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


import * as THREE from 'three'
import images from './img'

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

//Setting mouse coordinates
let targetX = 0;
let targetY = 0;

//Loading images as three texture
const textureOne = new THREE.TextureLoader().load(images.imageOne);
const textureTwo = new THREE.TextureLoader().load(images.imageTwo);

class Webgl{
    constructor(){
        this.container = document.querySelector('main');
        this.links = [...document.querySelectorAll('.work')]
        this.scene = new THREE.Scene
    }
}

new Webgl()