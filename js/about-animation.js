//import * as THREE from "../node_modules/three/build/three.module.js";
//import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

import * as THREE from "https://unpkg.com/three@0.156.1/build/three.module.js";
//import { GLTFLoader } from 'https://unpkg.com/three@0.156.1/examples/jsm/loaders/GLTFLoader.js';

//const loader = new GLTFLoader();

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#about-animation")
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);