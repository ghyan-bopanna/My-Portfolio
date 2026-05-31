import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // 'esnext' supports top-level await, fixing the Netlify esbuild transpile error.
    // The previous default targets (chrome87, es2020, etc.) do not support top-level await.
    target: 'esnext',
  },
})
