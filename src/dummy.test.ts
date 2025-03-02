import { describe, it, expect } from 'vitest';

describe('Wumm Application Tests', () => {
  it('should pass this dummy test', () => {
    expect(true).toBe(true);
  });

  it('should be able to do basic operations', () => {
    expect(1 + 1).toBe(2);
    expect('Wumm'.length).toBe(4);
    expect([1, 2, 3].includes(2)).toBe(true);
  });
}); 