import * as THREE from "three";

let scene, camera, renderer, points;
let mouseX = 0,
  mouseY = 0;
let rotationSpeed = 0.0005,
  minimalRotationSpeed = 0.0001;

self.onmessage = function (e) {
  if (e.data.canvas) {
    // Initialize Three.js with OffscreenCanvas
    initThreeJS(e.data.canvas, e.data.width, e.data.height);
    animate();
  }

  if (e.data.type === "resize") {
    resizeCanvas(e.data.width, e.data.height);
  }

  if (e.data.type === "mousemove") {
    mouseX = e.data.mouseX;
    mouseY = e.data.mouseY;
  }
};

function initThreeJS(canvas, width, height) {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 5;
  camera.position.y = -0.4;

  // Set up fog
  scene.fog = new THREE.Fog(0x000000, 3, 6);

  // Renderer using OffscreenCanvas
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(width, height, false);

  // Generate points
  const pointColor = 0xff6400;
  const pointSize = 0.012;
  const cubeSize = 3;
  const pointSpacing = 0.08;
  const pointsPerAxis = Math.floor(cubeSize / pointSpacing);
  const pointsArray = [];

  for (let x = 0; x < pointsPerAxis; x++) {
    for (let y = 0; y < pointsPerAxis; y++) {
      for (let z = 0; z < pointsPerAxis; z++) {
        const point = new THREE.Vector3(
          x * pointSpacing - cubeSize / 2,
          y * pointSpacing - cubeSize / 2,
          z * pointSpacing - cubeSize / 2,
        );
        pointsArray.push(point);
      }
    }
  }

  // Create point cloud
  const geometry = new THREE.BufferGeometry().setFromPoints(pointsArray);
  const material = new THREE.PointsMaterial({
    color: pointColor,
    size: pointSize,
  });
  points = new THREE.Points(geometry, material);
  scene.add(points);

  // Initial cube rotation
  points.rotation.y = Math.PI / 4;
  points.rotation.x = Math.PI / 4;
}

function resizeCanvas(width, height) {
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function animate() {
  // Render loop
  points.rotation.y += -mouseX * rotationSpeed + minimalRotationSpeed;
  points.rotation.x += -mouseY * rotationSpeed + minimalRotationSpeed;
  points.rotation.z = minimalRotationSpeed;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
