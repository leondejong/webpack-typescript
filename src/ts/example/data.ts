import { rectangle as r } from "./logic";

export const level = [
  // borders
  r(0, 0, 768, 16),
  r(0, 560, 768, 16),
  r(0, 0, 16, 576),
  r(752, 0, 16, 576),
  // floors
  r(336, 144, 16, 288),
  r(352, 144, 336, 16),
  r(418, 236, 336, 16),
  r(352, 326, 336, 16),
  r(464, 416, 112, 16),
  r(640, 416, 112, 16),
  r(576, 486, 64, 16),
  // platforms
  r(80, 486, 64, 16),
  r(208, 416, 64, 16),
  r(80, 348, 64, 16),
  r(208, 280, 64, 16),
  r(80, 212, 64, 16),
  r(208, 144, 64, 16),
  // stairs
  r(448, 432, 16, 16),
  r(432, 448, 16, 16),
  r(416, 464, 16, 16),
  r(400, 480, 16, 16),
  r(384, 496, 16, 16),
  r(368, 512, 16, 16),
  r(352, 528, 16, 16),
  r(336, 544, 16, 16),
  // walls
  r(420, 80, 16, 64),
  r(588, 80, 16, 64),
  r(504, 16, 16, 64),
];