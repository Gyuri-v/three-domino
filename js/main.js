import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dat from 'dat.gui';


class Domino {
    constructor(info) {
        this.scene = info.scene;
        this.cannonWorld = info.cannonWorld;

        this.index = info.index;
        
        this.width = info.width || 1;
        this.height = info.height || 2;
        this.depth = info.depth || 0.2;
        
        this.x = info.x || 0;
        this.y = info.y || 1;
        this.z = info.z || 0;

        this.rotationX = info.rotationX || 0;
        this.rotationY = info.rotationY || 0;
        this.rotationZ = info.rotationZ || 0;

        this.mesh = new THREE.Mesh(info.geometry, info.material);
        this.mesh.name = `${this.index}번째 도미노`;
        this.mesh.castShadow = true;
        this.mesh.position.set(this.x, this.y, this.z);
        this.mesh.rotation.set(this.rotationX, this.rotationY, this.rotationZ);
        this.scene.add(this.mesh);

        this.setCannonBody()
    }

    setCannonBody () {
        const shape = new CANNON.Box(new CANNON.Vec3( this.width / 2, this.height / 2, this.depth / 2 ) );

        this.cannonBody = new CANNON.Body({
            mass: 1,
            position: new CANNON.Vec3( this.x, this.y, this.z ),
            shape,
            material: dominoMaterial,
        });

        this.cannonBody.quaternion.setFromAxisAngle(
            new CANNON.Vec3(0, 1, 0),
            this.rotationY,
        );

        this.mesh.cannonBody = this.cannonBody;

        this.cannonWorld.addBody(this.cannonBody)
    }
}


const canvas = document.querySelector('.canvas');

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
})
renderer.setSize(document.body.clientWidth, window.innerHeight);

// scene
const scene = new THREE.Scene;
scene.background = new THREE.Color('#222');

// camera
const camera = new THREE.PerspectiveCamera(
    75,
    document.body.clientWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(0, 40, 50);
camera.lookAt(0, 0, 0);
scene.add( camera );

// controls
const controls = new OrbitControls( camera, renderer.domElement );

// AxesHelper
// const axesHelper = new THREE.AxesHelper(20);
// scene.add(axesHelper);

// gird
const gridHelper = new THREE.GridHelper(60);
scene.add(gridHelper);

// light
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
cannonWorld.gravity.set(0, -50, 0);
// 성능
cannonWorld.broadphase = new CANNON.SAPBroadphase(cannonWorld);

const defaultMaterial = new CANNON.Material('default');
const dominoMaterial = new CANNON.Material('domino');
const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
        friction: 0.5,
        restitution: 0.2,
    }
)
cannonWorld.defaultContactMaterial = defaultContactMaterial;
const dominoDefaultContactMaterial = new CANNON.ContactMaterial(
    dominoMaterial,
    defaultMaterial,
    {
        friction: 0.5, 
        restitution: 0.2, 
    }
);
cannonWorld.addContactMaterial(dominoDefaultContactMaterial);
const dominoDominoContactMaterial = new CANNON.ContactMaterial(
    dominoMaterial,
    dominoMaterial,
    {
        friction: 0.5, 
        restitution: 1.5, 
    }
);
cannonWorld.addContactMaterial(dominoDominoContactMaterial);

const floorShape = new CANNON.Plane();
const floorBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 0, 0),
    shape: floorShape,
    material: defaultMaterial,
});
floorBody.quaternion.setFromAxisAngle(
    new CANNON.Vec3(-1, 0, 0),
    Math.PI / 2,
);
cannonWorld.addBody(floorBody);


// mesh
const floorGeometry = new THREE.BoxGeometry(60, 1, 60);
const floorMaterial = new THREE.MeshStandardMaterial({
    color: '#111',
})
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.position.set(0, -1, 0);
floorMesh.receiveShadow = true;
floorMesh.castShadow = true;
scene.add(floorMesh);

const geometry = new THREE.BoxGeometry(1, 2, 0.2);
const material = new THREE.MeshStandardMaterial({
    color: '#aaa',
});
const materialRed = new THREE.MeshStandardMaterial({
    color: 'red',
});

let domino;
const dominos = [];
const tp = [19, 37, 74, 111, 150];
const dominoPoints = function (i) {
    if ( i < tp[0] ){ return [0, 0, -i]; } 
    else if ( i == tp[0] ) { return [0.5, 0, -18.7] }
    else if ( i == tp[1] ) { return [17.7, 0, -18.5] }
    else if ( i == tp[2] ) { return [18, 0, 18.5] }
    else if ( i == tp[3] ) { return [-18.7, 0, 18.5] }
    else if ( i >= tp[0] && i < tp[1] ) { return [(i - tp[0] + 0.2), 0, -tp[0]] }
    else if ( i >= tp[1] && i < tp[2] ) { return [(tp[1] - tp[0]), 0, (-tp[0] - tp[1] + i + 0.5)] }
    else if ( i >= tp[2] && i < tp[3] ) { return [(tp[0] + tp[2] - i - 1 ), 0, tp[0]] }
    else if ( i >= tp[3] && i < tp[4] ) { return [-tp[0], 0, tp[0] + tp[3] - i - 0.5]}
    else { return 'else' }
}
for (let i = 0; i < tp[tp.length - 1]; i++) {
    let rotationY = i >= tp[0] && i < tp[1] || i >= tp[2] && i < tp[3] ? Math.PI / 2 : 0;
    rotationY = 
        i == 18    ? -Math.PI / 8 :
        i == tp[0] ? -Math.PI / 4 : 
        i == 36    ?  Math.PI * 0.4 :
        i == tp[1] ?  Math.PI * 0.2 :
        i == tp[2] ? -Math.PI / 4 :
        i == tp[3] ?  Math.PI / 4 :
        rotationY;
    const itemMaterial = 
    i == 18 || i == 19 || i == 36 || i == 37 || i == 74 || i == 111
        ? materialRed : material;

    domino = new Domino({
        scene,
        cannonWorld,
        x: dominoPoints(i)[0],
        z: dominoPoints(i)[2],
        geometry,
        material: itemMaterial,
        rotationY,
        index: i,
    });
    dominos.push(domino);
}







// 그리기
const clock = new THREE.Clock();

const draw = function () {
    const delta = clock.getDelta();

    let cannonStepTime = 1 / 60;
    if ( delta < 0.01 ) cannonStepTime = 1 / 120;

    cannonWorld.step(cannonStepTime, delta, 3);

    dominos.forEach((item) => {
        if( item.cannonBody ){
            item.mesh.position.copy(item.cannonBody.position);
            item.mesh.quaternion.copy(item.cannonBody.quaternion);
        }
    });
    
    controls.update();

    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
}
draw();


// setSize
function setSize() {
    camera.aspect = document.body.clientWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.body.clientWidth, window.innerHeight);
    renderer.render(scene, camera);
}


// raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function checkIntersects() {
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    for (const item of intersects) {
        if ( intersects[0].object.cannonBody ){

            const forceX = camera.position.x < 0 ? 300 : camera.position.x > -30 && camera.position.x < 30 ? 0 : -300;
            const forceZ = camera.position.z < 0 ? 300 : -300;

            item.object.cannonBody.applyForce(
                new CANNON.Vec3(forceX, 0, forceZ),
                // new CANNON.Vec3(0, 0, 0),
            );
            break;
        };
    }
}
canvas.addEventListener('click', (e) => {
    mouse.x = (e.clientX / canvas.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY / canvas.clientHeight) * 2 - 1);

    checkIntersects();
});
window.addEventListener('resize', setSize);


