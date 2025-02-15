import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // ビルドされたリソースのパスを正しく指定するためにスラッシュで囲む
  base: "/CareerDocs/",
  plugins: [react()],
});
