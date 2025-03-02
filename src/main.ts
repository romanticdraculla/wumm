/**
 * Game Development Template
 * A minimalist starting point for TypeScript game development
 */

import './style.css';
import { Game } from './game';

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  // Initialize the game container
  app.innerHTML = `
    <div class="game-container">
      <canvas id="game-canvas"></canvas>
      <div id="ui-overlay" class="ui-overlay"></div>
    </div>
  `;
  
  // Get the canvas
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
  
  // Create and start the game
  const game = new Game(canvas);
  game.start();
}); 