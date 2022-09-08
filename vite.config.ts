import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from './src/app/config/app.config'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${config.REPOSITORY}/`,
  plugins: [react()]
})
