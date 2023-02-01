import type { Rectangle, Player } from "./types";

export function rectangle(x: number, y: number, w: number, h: number) {
  return { x, y, w, h };
}

export function intersect(a: Rectangle, b: Rectangle) {
  return (
    a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h
  );
}

export function translate(p: Player, rs: Rectangle[]) {
  let cx = 0;
  let cy = 0;
  let dx = p.vx;
  let dy = p.vy;

  const h = rectangle(p.x + dx, p.y, p.w, p.h);
  const v = rectangle(p.x, p.y + dy, p.w, p.h);

  rs.forEach((r) => {
    if (intersect(r, h)) {
      if (dx < 0) {
        dx = r.x + r.w - p.x;
      } else if (dx > 0) {
        dx = r.x - p.x - p.w;
      }

      cx = p.vx - dx;
    }

    if (intersect(r, v)) {
      if (dy < 0) {
        dy = r.y + r.h - p.y;
      } else if (dy > 0) {
        dy = r.y - p.y - p.h;
      }
    }

    cy = p.vy - dy;
  });

  return { dx, dy, cx, cy };
}
