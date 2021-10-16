import * as THREE from 'three'
import images from './img'
import vertex from './shaders/vertex.glsl';
import fragment from './shaders/fragment.glsl';


function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

//Setting mouse coordinates
let targetX = 0;
let targetY = 0;

//Loading images as three texture
const textureOne = new THREE.TextureLoader().load(images.imageOne);
const textureTwo = new THREE.TextureLoader().load(images.imageTwo);
const textureThree = new THREE.TextureLoader().load(images.imageThree);
const textureFour = new THREE.TextureLoader().load(images.imageFour);

class Webgl{
    constructor(){
        this.container = document.querySelector('section');
        this.links = [...document.getElementsByClassName('work-item')];
        console.log(this.links);
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
                        this.uniforms.uTexture.value = textureTwo;
                        break;
                        case 2:
                            this.uniforms.uTexture.value = textureThree;
                            break;
                            case 3:
                                this.uniforms.uTexture.value = textureFour;
                                break;
               }
           }) 
        })

       this.addEventListeners(document.getElementById('work-list'));
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
        this.geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
        // this.material = new THREE.MeshBasicMaterial({color: 0x39ff13});
        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
        })
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.sizes.set(800, 350);
        this.mesh.scale.set(this.sizes.x, this.sizes.y);
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.scene.add(this.mesh);

    }

    render(){
        this.offset.x = lerp(this.offset.x, targetX, 0.1);
        this.offset.y = lerp(this.offset.y, targetY, 0.1);
        this.uniforms.uOffset.value.set((targetX- this.offset.x) * 0.0005 , -(targetY- this.offset.y) * 0.0005 );

        this.linkHovered 
        ? this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 1.0, 0.1)
        : this.uniforms.uAlpha.value = lerp(this.uniforms.uAlpha.value, 0.0, 0.1);

        this.mesh.position.set(this.offset.x - (window.innerWidth / 2), -this.offset.y + (window.innerHeight / 2), 0);
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}

new Webgl()