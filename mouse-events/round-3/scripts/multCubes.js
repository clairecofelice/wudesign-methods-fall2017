var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var MAX_SIZE = 500;
var MIN_SIZE = 80;

var geometry = new Cube(Math.random()*MAX_SIZE + MIN_SIZE, Math.random()*MAX_SIZE + MIN_SIZE, Math.random()*MAX_SIZE + MIN_SIZE);

this.cube = new THREE.Mesh(geometry, new THREE.FaceColorFillMaterial());
this.reset();
scene.add(this.cube);
