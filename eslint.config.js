// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    ignores: [
      "**/dist/",
      "**/build/",
      "**/node_modules/",
      "**/config.*.js",
      "**/webpack.*.js",
    ],
  },
);
