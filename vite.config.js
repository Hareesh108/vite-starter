import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools'; // Update the import statement

export default defineConfig({
  plugins: [imagetools()],
});
