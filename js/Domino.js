import { Body, Box, Vec3 } from 'cannon-es';

export class Domino {
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
        })

    }
}