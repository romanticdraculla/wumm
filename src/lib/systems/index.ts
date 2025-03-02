import { produce } from "immer";
import { query, World } from "../ecs";

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
  produce(world, (draft) => {
    query(draft, ["position", "renderable"]).forEach((entity) => {
      const pos = draft.components.position[entity];
      draft.components.renderable[entity].position.set(pos.x, pos.y, pos.z);
    });
  });
