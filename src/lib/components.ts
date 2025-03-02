import * as THREE from "three";

export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Velocity {
  x: number;
  y: number;
  z: number;
}

export interface Renderable {
  mesh: THREE.Mesh;
}
