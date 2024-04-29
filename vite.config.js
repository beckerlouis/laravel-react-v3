import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: { watch: { ignored: [ '**/vendor/**', '**/storage/**' ]}},
    plugins: [
      laravel({
        input: [ 'resources/react/app.tsx' ],
        ssr: [ 'resources/react/ssr.tsx' ],
        refresh: true,
      }),
      react(),
      tsconfigPaths(),
    ],
    define: {
      'process.env': {},
      'global.env': {},
    },
    resolve: {
      alias: {
        '@vendor': path.resolve(__dirname, './vendor/*'),
        '@app': path.resolve(__dirname, './resources/react'),
      },
    },
    build: { commonjsOptions: { transformMixedEsModules: true }},
  });
};
