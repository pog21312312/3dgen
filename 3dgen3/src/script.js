window.addEventListener("load", function(){
// first phase, loading
var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x0000ff);
document.body.appendChild( renderer.domElement )
var scene = new THREE.Scene();
    // second phase, camera
    const FOV = 45;
    const ASPECT = window.innerWidth / window.innerHeight;
    const Near = 0.1;
    const FAR = 2000;
    var camera = new THREE.PerspectiveCamera(FOV, ASPECT,Near,FAR); // creates the camera
    camera.up.set(0, -0.5, 1);
    camera.rotation.x =- Math.PI/4;
    scene.add( camera);
    // phase 3. lighting
   var ambientLight =  new THREE.AmbientLight(0xffffff, 0.3);
   scene.add(ambientLight)
   var light = new THREE.DirectionalLight(0xffffff, 1);
   light.position.set(0, -10, 5);
   light.castShadow = true;
   scene.add(light)
    // orbital controls, phase 4
    var controls = new THREE.OrbitControls( camera, renderer.domElement);
   controls.minDistance = 80;
   controls.update();
   // render function phase 5
    var render = function(){
        requestAnimationFrame(render);
        renderer.render(scene,camera);
    }
render();

    // geometrical shapes phase 6
var groundWidth = 40;
var geometry = new THREE.PlaneGeometry(groundWidth, groundWidth)
var groundMat = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
    side: THREE.DoubleSide

})
var ground = new THREE.Mesh(geometry, groundMat)
    ground.position.z = -2.5;
scene.add(ground)

    var geometry = new THREE.BoxGeometry(5, 5, 5);
var material = new THREE.MeshLambertMaterial({
color:"red"

})
    var figure = new THREE.Mesh(geometry,material);
scene.add(figure)

    window.addEventListener('keydown', (event) => {
        // Check if the pressed key is the desired one
        if (event.key === 'Enter') {
            // Code to execute when the Enter key is pressed
            console.log('Enter key pressed!');
            // You can add your desired actions here
        }
    });
})