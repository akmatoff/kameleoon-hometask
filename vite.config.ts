import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const basename = process.env.ROUTER_BASENAME || "/";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  base: basename,
});
