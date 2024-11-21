import { AliasOptions, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
});
