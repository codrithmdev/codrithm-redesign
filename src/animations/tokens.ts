/**
 * Central animation tokens. Never scatter raw duration/easing numbers
 * across components — import from here.
 */

export const DURATION_FAST = 0.2;
export const DURATION_NORMAL = 0.5;
export const DURATION_SLOW = 0.8;
export const DURATION_REVEAL = 0.9;

export const EASE_STANDARD = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const DISTANCE_SMALL = 10;
export const DISTANCE_MEDIUM = 30;
export const DISTANCE_LARGE = 50;

export const STAGGER_SMALL = 0.05;
export const STAGGER_NORMAL = 0.08;

/** Shared viewport config: fire once, ~20% of the element visible. */
export const VIEWPORT = { once: true, amount: 0.2 } as const;
export const VIEWPORT_LOOSE = { once: true, amount: 0.1 } as const;
