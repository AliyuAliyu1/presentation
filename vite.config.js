import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Components({
      dts: true,
      resolvers: [
        (name) => {
          if (name.endsWith('Solid')) {
            return {
              importName: name.replace(/Solid$/, 'Icon'),
              path: '@heroicons/vue/24/solid',
            }
          }
          if (name.endsWith('Outline')) {
            return {
              importName: name.replace(/Outline$/, 'Icon'),
              path: '@heroicons/vue/24/outline',
            }
          }
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
