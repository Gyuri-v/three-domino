import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import dat from 'dat.gui';


class Domino {
    constructor(info) {
        this.scene = info.scene;
        this.cannonWorld = info.cannonWorld;

        this.index = info.index;
        
        this.width = info.width || 0.6;
        this.height = info.height || 1;
        this.depth = info.depth || 0.2;
        
        this.x = info.x || 0;
        this.y = info.y || 0.5;
        this.z = info.z || 0;

        this.rotationX = info.rotationX || 0;
        this.rotationY = info.rotationY || 0;
        this.rotationZ = info.rotationZ || 0;

        info.gltfLoader.load('models/domino.glb', (glb) => {
            this.modelMesh = glb.scene.children[0];
            this.modelMeshName = `${this.index}번째 도미노`;
            this.modelMesh.castShadow = true;
            this.modelMesh.position.set(this.x, this.y, this.z);
            this.modelMesh.rotation.set(this.rotationX, this.rotationY, this.rotationZ)
            this.scene.add(this.modelMesh);

            // this.setCannonBody();
        })

    }
}


const canvas = document.querySelector('.canvas');

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
})
renderer.setSize(window.innerWidth, window.innerHeight);

// scene
const scene = new THREE.Scene;
scene.background = new THREE.Color('#222');

// camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(0, 40, 50);
camera.lookAt(0, 0, 0);
scene.add( camera );

// controls
const controls = new OrbitControls( camera, renderer.domElement );

// AxesHelper
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);

// gird
const gridHelper = new THREE.GridHelper(60);
scene.add(gridHelper);

// light
const ambientLight = new THREE.AmbientLight('#fff', 0.2);

const spotLightDistanse = 15;
const spotLight1 = new THREE.SpotLight('#fff', 1);
spotLight1.castShadow = true;
spotLight1.shadow.mapSize.width = 2048;
spotLight1.shadow.mapSize.height = 2048;
const spotLight2 = spotLight1.clone();
const spotLight3 = spotLight1.clone();
const spotLight4 = spotLight1.clone();
spotLight1.position.set( -spotLightDistanse, spotLightDistanse, spotLightDistanse);
spotLight2.position.set( spotLightDistanse, spotLightDistanse, spotLightDistanse);
spotLight3.position.set( -spotLightDistanse, spotLightDistanse, -spotLightDistanse);
spotLight4.position.set( spotLightDistanse, spotLightDistanse, -spotLightDistanse);

scene.add(spotLight1, spotLight2, spotLight3, spotLight4);

// gui
const gui = new dat.GUI();
gui.add(camera.position, 'x', -20, 20, 0.01).name('camera x');
gui.add(camera.position, 'y', -20, 20, 0.01).name('camera y');
gui.add(camera.position, 'z', -20, 20, 0.01).name('camera z');

// cannon
const cannonWorld = new CANNON.World();
cannonWorld.gravity.set(0, -10, 0);

// mesh
const floorGeometry = new THREE.BoxGeometry(60, 1, 60);
const floorMaterial = new THREE.MeshStandardMaterial({
    color: '#111',
})
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.receiveShadow = true;
floorMesh.castShadow = true;
floorMesh.position.set(0, -1, 0);
scene.add(floorMesh);

// gltf
const gltfLoader = new GLTFLoader();

const tp = [19, 37, 74, 111, 150];
const tpv = [18, 36];
const dominoPoints = function (i) {
    if ( i < tp[0] ){ return [0, 0, -i]; } 
    else if ( i >= tp[0] && i < tp[1] ) { return [(i - tp[0]), 0, -tpv[0]] }
    else if ( i >= tp[1] && i < tp[2] ) { return [(tp[1] - tp[0]), 0, (-tpv[0] - tp[1] + i)] }
    else if ( i >= tp[2] && i < tp[3] ) { return [(tpv[0] + tp[2] - i ), 0, tpv[0]] }
    else if ( i >= tp[3] && i < tp[4] ) { return [-tpv[0], 0, tpv[0] + tp[3] - i]}
    else { return 'else' }
}
const dominos = [];
let domino;
for (let i = 0; i < tp[tp.length - 1]; i++) {

    const rotation = i >= tp[0] && i < tp[1] || i >= tp[2] && i < tp[3] ? Math.PI / 2 : 0;

    domino = new Domino({
        scene,
        cannonWorld,
        gltfLoader,
        x: dominoPoints(i)[0],
        z: dominoPoints(i)[2],
        rotationY: rotation,
        index: i,
    });
    dominos.push(domino);
}






// 그리기
const draw = function () {
    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(draw);
}
draw();



