import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import Markdown from 'vite-plugin-md'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), Markdown(), svgr()],
  assetsInclude: ['**/*.md']
})
