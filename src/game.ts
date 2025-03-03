import * as THREE from "three";
import { addComponent, createEntity, createWorld, World } from "./lib/ecs";
import { movementSystem } from "./lib/systems";
import { renderSystem } from "./lib/systems";
import { inputSystem } from "./lib/systems/input";
import { pipe } from "./utils/pipe";

const setupThree = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  return { scene, camera, renderer };
};

const createMovingCube = (world: World, position: THREE.Vector3, velocity: THREE.Vector3, scene: THREE.Scene): World => {
  const [newWorld, entity] = createEntity(world);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial());
  scene.add(mesh);

  return pipe(
    newWorld,
    world => addComponent(world, entity, "position", position),
    world => addComponent(world, entity, "velocity", velocity),
    world => addComponent(world, entity, "renderable", mesh),
    world => addComponent(world, entity, "input", { speed: 10 })
  )
};

const game = () => {
  const { scene, camera, renderer } = setupThree();
  const world = pipe(
    createWorld(),
    world => createMovingCube(world, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0), scene)
  );

  const systems = [movementSystem, inputSystem, renderSystem];
  const clock = new THREE.Clock();

  const animate = () => {
    systems.reduce((world, system) => system(world, clock.getDelta()), world);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
};

game();
