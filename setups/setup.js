const options = 
{
    targetSelector: '#scene',
    width: 1200, height: 800,
    backgroundColor: 0x3498eb
}

const renderer = new THREE.WebGLRenderer(
    { antialias: true }
);

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(
    options.backgroundColor
);

const camera = new THREE.PerspectiveCamera
(
    50, options.width / options.height
);

camera.position.x = 2.5;
camera.position.y = 6.5;
camera.position.z = 9;
const x3 = new THREEx3(
    { THREE, OrbitControls:THREE.OrbitControls, camera, renderer, scene},
    {grid: {visible: false}, axes: {visible: false}}
);

x3.add(camera, {open: false});

renderer.shadowMap.enabled = true;

renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.physicallyCorrectLights = true;

renderer.toneMapping = THREE.ACESFilmicToneMapping;