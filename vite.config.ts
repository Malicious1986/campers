import path from 'path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgSpritePlugin from "@pivanov/vite-plugin-svg-sprite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgSpritePlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "[dir]-[name]",
      svgDomId: "svg-sprite",
      inject: "body-last",
    }),
  ],
});
