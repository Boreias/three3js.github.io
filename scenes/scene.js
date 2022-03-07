// --------------------------------------------TEXTURAS-------------------------------------------------
const loader = new THREE.TextureLoader();

const parede = new THREE.MeshLambertMaterial(
    { 
        color: 0xA96C50,
        side:THREE.DoubleSide
    }
);

const piso = new THREE.MeshStandardMaterial({
    map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/basecolor.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/normal.jpg'),
    aoMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/occlusion.jpg'),
    roughnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/roughness.jpg'),
})

const luzSolar = new THREE.MeshBasicMaterial(
    { 
        color: 0xFFFFFF,
        side:THREE.FrontSide
    }
);

const polyester = new THREE.MeshStandardMaterial({
    map:loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'),
    normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg')
})

const moldura1 = new THREE.MeshPhongMaterial(
    { 
        color: 0x32667d,
        side:THREE.FrontSide
    }
);

const moldura2 = new THREE.MeshPhongMaterial(
    { 
        color: 0xc3354b,
        side:THREE.FrontSide
    }
);

const moldura3 = new THREE.MeshPhongMaterial(
    { 
        color: 0xe6cd14,
        side:THREE.FrontSide
    }
);

const sofa = new THREE.MeshPhongMaterial(
    { 
        color: 0xA4A4A4,
        side:THREE.DoubleSide
    }
);

//-------------------------------------------------SOL--------------------------------------------------------

const sol = new THREE.Mesh
(
    // Raio SegmentosLargura SegmentosAltura
    new THREE.SphereBufferGeometry(
        1, 20, 20
    ),
    luzSolar
);

sol.position.x = -10.35;
sol.position.y = 4.85;
sol.position.z = -10.9;

scene.add(sol);

x3.add(sol, {label: 'sol'});

//---------------------------------------------PAREDES--------------------------------------------------
const baseParede = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.05, 1.5, 8
    ),
    parede
);
baseParede.position.x = -3
baseParede.position.y = 0.75
baseParede.position.z = 2

scene.add(baseParede);

x3.add(baseParede, {label: 'baseParede'});


const direitaParede = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.05, 1.5, 2.5
    ),
    parede
);
direitaParede.position.x = -3
direitaParede.position.y = 2.25
direitaParede.position.z = -0.75

scene.add(direitaParede);

x3.add(direitaParede, {label: 'direitaParede'});


const esquerdaParede = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.05, 1.5, 2.5
    ),
    parede
);
esquerdaParede.position.x = -3
esquerdaParede.position.y = 2.25
esquerdaParede.position.z = 4.75

scene.add(esquerdaParede);

x3.add(esquerdaParede, {label: 'esquerdaParede'});


const topoParede = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.05, 1.5, 8
    ),
    parede
);
topoParede.position.x = -3
topoParede.position.y = 3.75
topoParede.position.z = 2

scene.add(topoParede);

x3.add(topoParede, {label: 'topoParede'});


const topoPorta = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.05, 1.5, 1.5
    ),
    parede
);
topoPorta.position.x = -3
topoPorta.position.y = 3.75
topoPorta.position.z = -2.6

scene.add(topoPorta);

x3.add(topoPorta, {label: 'topoPorta'});


const paredeLateral = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        8, 4.5, 0.05
    ),
    parede
);
paredeLateral.position.x = 1
paredeLateral.position.y = 2.25
paredeLateral.position.z = -3.35

scene.add(paredeLateral);

x3.add(paredeLateral, {label: 'paredeLateral'});


//------------------------------------------------CHÃO------------------------------------------------------

const chao = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(8, 9.5),
    piso
);

chao.rotation.x = THREE.MathUtils.degToRad(-90);
chao.position.x = 1
chao.position.z = 1.3
chao.receiveShadow = true;

scene.add(chao);

x3.add(chao, {label: 'chao'});

//-----------------------------------------------BOLA------------------------------------------------------

const bola = new THREE.Mesh
(
    // Raio SegmentosLargura SegmentosAltura
    new THREE.SphereBufferGeometry(
        0.5, 20, 20
    ),
    polyester
);
bola.position.y = 0.45;
bola.position.z = 3.6;
bola.castShadow = true;
scene.add(bola);

x3.add(bola, {label: 'bola', helper: {visible: false}});


//-----------------------------------------------QUADROS--------------------------------------------------------

const quadro1 = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.75, 0.5, 0.05
    ),
    moldura1
);
quadro1.position.x = 2.2
quadro1.position.y = 2.61
quadro1.position.z = -3.29

scene.add(quadro1);

x3.add(quadro1, {label: 'quadro1'});


const quadro2 = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.75, 0.5, 0.05
    ),
    moldura2
);
quadro2.position.x = 0.45
quadro2.position.y = 2
quadro2.position.z = -3.29

scene.add(quadro2);

x3.add(quadro2, {label: 'quadro2'});


const quadro3 = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.75, 0.5, 0.05
    ),
    moldura3
);
quadro3.position.x = -1.17
quadro3.position.y = 2.5
quadro3.position.z = -3.29

scene.add(quadro3);

x3.add(quadro3, {label: 'quadro3'});


//-----------------------------------------------SOFA-----------------------------------------------------------

const baseSofa = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        2, 0.75, 3
    ),
    sofa
);
baseSofa.position.x = 2.5
baseSofa.position.y = 0.375
baseSofa.position.z = 0
baseSofa.castShadow = true;

scene.add(baseSofa);

x3.add(baseSofa, {label: 'baseSofa'});


const esquerdaSofa = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        1, 1.25, 0.4
    ),
    sofa
);
esquerdaSofa.position.x = 3
esquerdaSofa.position.y = 0.625
esquerdaSofa.position.z = -1.6
esquerdaSofa.castShadow = true;

scene.add(esquerdaSofa);

x3.add(esquerdaSofa, {label: 'esquerdaSofa'});


const direitaSofa = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        1, 1.25, 0.4
    ),
    sofa
);
direitaSofa.position.x = 3
direitaSofa.position.y = 0.625
direitaSofa.position.z = 1.64
direitaSofa.castShadow = true;

scene.add(direitaSofa);

x3.add(direitaSofa, {label: 'direitaSofa'});


const encostoSofa = new THREE.Mesh
(
    // x y z
    new THREE.BoxBufferGeometry(
        0.4, 1.6, 3.5
    ),
    sofa
);
encostoSofa.position.x = 3.5
encostoSofa.position.y = 0.8
encostoSofa.position.z = 0.005
encostoSofa.castShadow = true;

scene.add(encostoSofa);

x3.add(encostoSofa, {label: 'encostoSofa'});


//------------------------------------------------LUZ-----------------------------------------------------------

const luz = new THREE.DirectionalLight( 0xFFFFFF, 2 );
luz.position.x = -10.35;
luz.position.y = 4.85;
luz.position.z = -10.9
luz.castShadow = true;
scene.add( luz );

x3.add(luz, {label: 'luz', helper: {visible: false}});

//-----------------------------------------------LAMPADA-----------------------------------------------------------

const lampada = new THREE.PointLight(
    0xFFC285, 3.1, 30, 0.4
    );
lampada.position.x = 0;
lampada.position.y = 4;
lampada.position.z = 0;
lampada.castShadow = true;
scene.add (lampada);

x3.add(lampada, {label: 'lampada', helper: {visible: false}});

renderer.setAnimationLoop(() => {

    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
})


