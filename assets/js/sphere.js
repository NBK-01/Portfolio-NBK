import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
global.THREE = THREE;

require("three/examples/js/controls/OrbitControls");
require("three/examples/js/loaders/GLTFLoader.js");
require("three/examples/js/loaders/RGBELoader.js");
const { GUI } = require("dat.gui");

let container, stats1, stats2, stats3;

let camera, scene, renderer;

let geometry, material, geoclone, clone_position, clone_normal, damping, count;

let nfst = new THREE.Vector3();
let nlst = new THREE.Vector3();
let navg = new THREE.Vector3();

let options = {
  wireframe: false,
  vertexColors: false,
  xcycles: 5,
  ycycles: 3
};

init();
render();

function init() {
  container = document.getElementById("container");

  //

  camera = new THREE.PerspectiveCamera(
    27,
    window.innerWidth / window.innerHeight,
    1,
    200
  );
  camera.position.z = 30;

  scene = new THREE.Scene();
  

  //

  scene.add(new THREE.AmbientLight(0x444444));
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(-30, 30, 60);
  scene.add(dirLight);

  //

  geometry = new THREE.SphereGeometry(5, 128, 128);
  material = new THREE.MeshStandardMaterial({
    color: 0xFD850D,
    metalness: 0.2,
    roughness: 0,
    // flatShading: true,
    wireframe: options.wireframe,
    vertexColors: options.vertexColors
  });
  const sphere = new THREE.Mesh(geometry, material);
  // sphere.receiveShadow = true;
  // sphere.castShadow = true;
  // sphere.rotation.x = -Math.PI / 4;
  scene.add(sphere);

  count = geometry.attributes.position.count;
  // geometry.setAttribute(
  //   "color",
  //   new THREE.BufferAttribute(new Float32Array(count * 3), 3)
  // );

  geoclone = geometry.clone();
  clone_position = geoclone.attributes.position;
  clone_normal = geoclone.attributes.normal;

  damping = 0.4;

  //





  renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);
  container.appendChild(renderer.domElement);

  //

  stats1 = new Stats();
  stats1.showPanel(0); // Panel 0 = fps
  stats1.domElement.style.cssText = "position:absolute;top:0px;left:0px;display:none;";
  container.appendChild(stats1.domElement);

  stats2 = new Stats();
  stats2.showPanel(1); // Panel 1 = ms
  stats2.domElement.style.cssText = "position:absolute;top:0px;left:80px;display:none;";
  container.appendChild(stats2.domElement);

  stats3 = new Stats();
  stats3.showPanel(2); // Panel 2 = mb
  stats3.domElement.style.cssText = "position:absolute;top:0px;left:160px;display:none;";
  container.appendChild(stats3.domElement);

  // new THREE.OrbitControls(camera, renderer.domElement);

  

  

  //

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

//

function animateSphere() {
  const now = Date.now() / 500;

  // iterate all vertices
  for (let i = 0; i < count; i++) {
    // use uvs to calculate wave
    const uX = geometry.attributes.uv.getX(i) * 2 * Math.PI * options.xcycles;
    const uY = geometry.attributes.uv.getY(i) * 2 * Math.PI * options.ycycles;

    // calculate current vertex wave height
    const xangle = Math.sin(uX) * 2;
    const yangle = uY + now;
    const waveValue = Math.sin(yangle + xangle);
    const waveFunction = waveValue * damping;
    const heightFactor = Math.sin(geometry.attributes.uv.getY(i) * Math.PI);

    // set new position
    geometry.attributes.position.setX(
      i,
      clone_position.getX(i) +
        clone_normal.getX(i) * waveFunction * heightFactor
    );
    geometry.attributes.position.setY(
      i,
      clone_position.getY(i) +
        clone_normal.getY(i) * waveFunction * heightFactor
    );
    geometry.attributes.position.setZ(
      i,
      clone_position.getZ(i) +
        clone_normal.getZ(i) * waveFunction * heightFactor
    );

    // const color = new THREE.Color();
    // color.setRGB(0, waveValue / 2 + 0.5, 1 - waveValue / 2 - 0.5);

    // // colors
    // geometry.attributes.color.setXYZ(i, color.r, color.g, color.b);
  }

  geometry.computeVertexNormals();
  // harmonize the start and end normals along the seams
  harmonizeSeamNormals();
  geometry.attributes.position.needsUpdate = true;
  // geometry.attributes.color.needsUpdate = true;
}

function harmonizeSeamNormals() {
  let headIndex = 0;
  const geoNormal = geometry.attributes.normal;
  for (let diu = 0; diu <= 128; diu++) {
    let tailIndex = headIndex + 128;
    nfst.set(
      geoNormal.getX(headIndex),
      geoNormal.getY(headIndex),
      geoNormal.getZ(headIndex)
    );
    nlst.set(
      geoNormal.getX(tailIndex),
      geoNormal.getY(tailIndex),
      geoNormal.getZ(tailIndex)
    );
    navg = nfst.add(nlst).normalize();
    geoNormal.setXYZ(headIndex, navg.x, navg.y, navg.z);
    geoNormal.setXYZ(tailIndex, navg.x, navg.y, navg.z);
    headIndex = tailIndex + 1;
  }
}

function animate() {
  requestAnimationFrame(render);

  animateSphere();

  stats1.update();
  stats2.update();
  stats3.update();
}

function render() {
  animate();

  renderer.render(scene, camera);
}