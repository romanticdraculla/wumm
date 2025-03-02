import { World, query } from '../ecs';
import { produce } from 'immer';

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

window.addEventListener('keydown', e => {
  if (e.key in keys) keys[e.key as keyof typeof keys] = true;
});

window.addEventListener('keyup', e => {
  if (e.key in keys) keys[e.key as keyof typeof keys] = false;
});

export const inputSystem = (world: World, _: number): World => {
  const entities = query(world, ['velocity', 'input']);

  return produce(world, draft => {
    entities.forEach(entity => {
      const input = draft.components.input[entity];
      const velocity = draft.components.velocity[entity];

      velocity.x = 0;
      velocity.z = 0;

      if (keys.ArrowUp) velocity.z -= input.speed;
      if (keys.ArrowDown) velocity.z += input.speed;
      if (keys.ArrowLeft) velocity.x -= input.speed;
      if (keys.ArrowRight) velocity.x += input.speed;
    });
  });
};
