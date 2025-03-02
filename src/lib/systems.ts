import { produce } from "immer";
import { query, World } from "./ecs";

export const movementSystem = (world: World, delta: number) =>
  produce(world, (draft) => {
    const entities = query(draft, ["position", "velocity"]);
    for (const entity of entities) {
      const position = draft.components.position[entity];
      const velocity = draft.components.velocity[entity];
      position.x += velocity.x * delta;
      position.y += velocity.y * delta;
      position.z += velocity.z * delta;
    }
  });

export const renderSystem = (world: World, _: number) => 
  query(world, ["position", "renderable"]).forEach((entity) => {
    const pos = world.components.position[entity];
    world.components.renderable[entity].position.set(pos.x, pos.y, pos.z);
  });
