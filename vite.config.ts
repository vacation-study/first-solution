import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@main", replacement: "/src/pages/main/index" },
      { find: "@not", replacement: "/src/pages/not/index" },
      { find: "@error", replacement: "/src/pages/error/index" },
      { find: "@assignment", replacement: "/src/pages/assignment/index" }
    ]
  }
})
