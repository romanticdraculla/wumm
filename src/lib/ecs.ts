import { produce } from "immer";
import { Velocity, Position, Input } from "./components";
import { Mesh } from "three";

export type Entity = number;

export interface Components {
  position: Record<Entity, Position>;
  velocity: Record<Entity, Velocity>;
  renderable: Record<Entity, Mesh>;
  input: Record<Entity, Input>;
}

export interface World {
  nextEntityId: number;
  components: Components;
}

export const createWorld = (): World => {
  return {
    nextEntityId: 1,
    components: {
      position: {},
      velocity: {},
      renderable: {},
      input: {},
    },
  };
};

export const createEntity = (world: World): [World, Entity] => {
  const newWorld = produce(world, (draft) => {
    ++draft.nextEntityId;
  });
  return [newWorld, newWorld.nextEntityId];
};

export const addComponent = <K extends keyof Components>(world: World, entity: Entity, component: K, componentData: Components[K][Entity]) => {
  const newWorld = produce(world, (draft) => {
    draft.components[component][entity] = componentData;
  });
  return newWorld;
};

export const removeEntity = (world: World, entity: Entity) => {
  const newWorld = produce(world, (draft) => {
    Object.entries(draft.components).forEach(([_, componentData]) => {
      delete componentData[entity];
    });
  });
  return newWorld;
};

export const query = <K extends keyof Components>(world: World, components: Array<K>) => {
  const [first, ...rest] = components;
  return Object.keys(world.components[first])
    .map(Number)
    .filter((entity) => rest.every((component) => entity in world.components[component]));
};
