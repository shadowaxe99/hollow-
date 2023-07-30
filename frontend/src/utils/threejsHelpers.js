```javascript
import * as THREE from 'three';

export const initThreeJs = (containerId) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById(containerId).appendChild(renderer.domElement);

  return { scene, camera, renderer };
};

export const create3DModel = (scene, modelPath) => {
  const loader = new THREE.ObjectLoader();

  loader.load(
    modelPath,
    (object) => {
      scene.add(object);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
      console.log('An error happened', error);
    }
  );
};
```