// vite.config.ts
import { defineConfig } from "file:///Users/levkaplunov/Desktop/projects/ReviewHelp/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/levkaplunov/Desktop/projects/ReviewHelp/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { createSvgIconsPlugin } from "file:///Users/levkaplunov/Desktop/projects/ReviewHelp/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/levkaplunov/Desktop/projects/ReviewHelp";
var svgIconsConfig = {
  iconDirs: [resolve(__vite_injected_original_dirname, "./src/assets/icons")]
};
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin(svgIconsConfig)
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGV2a2FwbHVub3YvRGVza3RvcC9wcm9qZWN0cy9SZXZpZXdIZWxwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbGV2a2FwbHVub3YvRGVza3RvcC9wcm9qZWN0cy9SZXZpZXdIZWxwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9sZXZrYXBsdW5vdi9EZXNrdG9wL3Byb2plY3RzL1Jldmlld0hlbHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJztcblxuY29uc3Qgc3ZnSWNvbnNDb25maWcgPSB7XG4gIGljb25EaXJzOiBbcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hc3NldHMvaWNvbnMnKV0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbihzdmdJY29uc0NvbmZpZyksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxvQkFBb0I7QUFDelYsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixTQUFTLDRCQUE0QjtBQUhyQyxJQUFNLG1DQUFtQztBQUt6QyxJQUFNLGlCQUFpQjtBQUFBLEVBQ3JCLFVBQVUsQ0FBQyxRQUFRLGtDQUFXLG9CQUFvQixDQUFDO0FBQ3JEO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLHFCQUFxQixjQUFjO0FBQUEsRUFDckM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=