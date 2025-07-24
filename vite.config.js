//import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5174,
//     strictPort: true,
//     host: true,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000', // Directly specify the URL
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       }
//     }
//   }
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Using Vite's default port
    strictPort: false,  // Allows port fallback
    host: true,  // Accessible on network
    open: true   // Auto-open browser
  }
})
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'http://localhost:5000',
//     },
//   },
// })