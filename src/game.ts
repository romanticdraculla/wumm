
export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationFrameId: number = 0;
  private lastTime: number = 0;
  private running: boolean = false;

  // Game state
  private score: number = 0;
  
  /**
   * Creates a new Game instance
   * @param canvas The canvas element to render to
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    
    // Get the 2D rendering context
    const context = this.canvas.getContext('2d');
    if (!context) {
      throw new Error('Could not get 2D context from canvas');
    }
    this.ctx = context;
    
    // Set up resize handling
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize();
  }
  
  /**
   * Starts the game loop
   */
  public start(): void {
    if (this.running) return;
    
    this.running = true;
    this.lastTime = performance.now();
    this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
  }
  
  /**
   * Stops the game loop
   */
  public stop(): void {
    if (!this.running) return;
    
    this.running = false;
    cancelAnimationFrame(this.animationFrameId);
  }
  
  /**
   * The main game loop
   * @param currentTime The current timestamp
   */
  private gameLoop(currentTime: number): void {
    // Calculate delta time in seconds
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;
    
    // Update and render
    this.update(deltaTime);
    this.render();
    
    // Continue the loop if still running
    if (this.running) {
      this.animationFrameId = requestAnimationFrame(this.gameLoop.bind(this));
    }
  }
  
  /**
   * Update game logic
   * @param deltaTime Time since last update in seconds
   */
  private update(deltaTime: number): void {
    // Example: increment score over time
    this.score += deltaTime;
  }
  
  /**
   * Render the game
   */
  private render(): void {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Fill with a background color
    this.ctx.fillStyle = '#333';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw a simple text
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = '24px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`Score: ${Math.floor(this.score)}`, this.canvas.width / 2, 50);
    
    // Draw some game element (example: a bouncing rectangle)
    const time = performance.now() / 1000;
    const x = (Math.sin(time) * 0.5 + 0.5) * (this.canvas.width - 100);
    const y = (Math.cos(time * 0.8) * 0.5 + 0.5) * (this.canvas.height - 100);
    
    this.ctx.fillStyle = '#4CAF50';
    this.ctx.fillRect(x, y, 100, 100);
  }
  
  /**
   * Handle window resize
   */
  private onResize(): void {
    const container = this.canvas.parentElement;
    if (!container) return;
    
    // Set canvas dimensions to match container
    const { width, height } = container.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height;
  }
} 