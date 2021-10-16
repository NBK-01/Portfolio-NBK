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
        this.scene = new THREE.Scene();
        //Camera perspective on Z axis
        this.perspective = 1000;
        //Size of mesh 
        this.sizes =  new THREE.Vector2(0,0);
        //Position of mesh
        this.offset = new THREE.Vector2(0,0);
        this.uniforms = {
            uTexture: {value: textureOne},
            uAlpha: {value: 0.0},
            uOffset: {value: new THREE.Vector2(0.0, 0.0)}
        }
        this.links.forEach((link, idx) =>{
           link.addEventListener('mouseenter', () => {
               switch(idx){
                   case 0:
                       this.uniforms.uTexture.value = textureOne;
                       break;
                    case 1:
                        this.uniforms.uTexture.value = textureTwo
                        break;
               }
           }) 
        })

       this.addEventListeners(document.querySelector('.work-list'));
       this.setupCamera();
       this.onMousemove();
       this.createMesh();
       this.render();

    }

    get viewport() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;

        return {
            width,
            height, 
            aspectRatio
        }
    }

    onMousemove(){
        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        })
    }

    addEventListeners(element){
        element.addEventListener('mouseenter', () =>{
            this.linksHover = true;
        })
        element.addEventListener('mouseleave', () =>{
            this.linksHover = false;
        } )
    }

    setupCamera(){
        //resizing window
        window.addEventListener('resize', this.onWindowResize.bind(this));


        let fov = (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) / Math.PI;
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 0.1, 1000);
        this.camera.position.set(0, 0, this.perspective);

        this.renderer = new THREE.WebGL1Renderer({antialias: true, alpha: true});
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
        
    }

    onWindowResize(){
        this.camera.aspect = this.viewport.aspectRatio;
        this.camera.fov = (180 * (2 * Math.atan(this.viewport.height / 2 / this.perspective))) / Math.PI;
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.camera.updateProjectionMatrix();
    }

    createMesh(){
        this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20)
        this.material = new THREE.MeshBasicMaterial({color: 0x39ff13});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.sizes.set(250, 350);
        this.mesh.scale.set(this.sizes.x, this.sizes.y);
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.scene.add(this.mesh);

    }

    render(){
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.renderer.bind(this));
    }
}

new Webgl()