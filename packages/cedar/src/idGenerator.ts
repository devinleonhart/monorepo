import { nanoid } from 'nanoid';

/**
 * Generates a unique ID using nanoid.
 * @returns A unique string ID.
 */
export function generateUniqueId(): string {
  return nanoid(); // Default length is 21
}
