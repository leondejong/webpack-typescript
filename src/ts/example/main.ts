import type { Keys } from "./types";
import { level } from "./data";
import { rectangle, translate } from "./logic";

const fps = 60;
const gravity = 0.5;
const speed = 5;
const jump = 10;

const up = "KeyE";
const left = "KeyS";
const down = "KeyD";
const right = "KeyF";

const backgroundColor = "rgba(223, 231, 239, 1)";
const contentColor = "rgba(95, 103, 111, 1)";
const playerColor = "rgba(0, 127, 255, 1)";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

const width = canvas.width;
const height = canvas.height;

const player = { ...rectangle(32, 32, 16, 16), vx: 0, vy: 0 };

const keys: Keys = {
  [left]: false,
  [right]: false,
  [up]: false,
  [down]: false,
};

function update() {
  let direction = 0;

  if (keys[left]) {
    direction -= 1;
  }

  if (keys[right]) {
    direction += 1;
  }

  player.vx = speed * direction;
  player.vy += gravity;

  const { dx, dy, cx, cy } = translate(player, level);

  player.vx = cx === 0 ? dx : 0;
  player.vy = cy === 0 ? dy : 0;

  if (keys[up] && cy > 0) {
    player.vy -= jump;
  }

  player.x += dx;
  player.y += dy;
}

function render() {
  // context.clearRect(0, 0, width, height);

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, width, height);

  context.fillStyle = playerColor;
  context.fillRect(player.x, player.y, player.w, player.h);

  context.fillStyle = contentColor;
  level.forEach((r) => {
    context.fillRect(r.x, r.y, r.w, r.h);
  });
}

function loop() {
  update();
  render();
  setTimeout(loop, 1000 / fps);
}

export default function main() {
  document.onkeydown = function (e) {
    keys[e.code] = true;
  };

  document.onkeyup = function (e) {
    keys[e.code] = false;
  };

  loop();
}
