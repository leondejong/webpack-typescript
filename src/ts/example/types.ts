export type Rectangle = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Player = Rectangle & {
  vx: number;
  vy: number;
};

export type Keys = {
  [code: string]: boolean;
};
