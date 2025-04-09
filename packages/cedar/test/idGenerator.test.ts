import { describe, it, expect } from 'vitest';
import { generateUniqueId } from '../src/idGenerator';

describe('generateUniqueId', () => {
  it('should return a string ID', () => {
    const id = generateUniqueId();
    expect(typeof id).toBe('string');
  });

  it('should return an ID of the default length (21)', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(21);
  });

  it('should return unique IDs on subsequent calls', () => {
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();
    expect(id1).not.toBe(id2);
  });
});
