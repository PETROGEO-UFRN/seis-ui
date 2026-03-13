import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

import pkg from './package.json';

const externalPackages = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'seis-ui',
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        if (format === 'es')
          return `${name}.js`
        return `${name}.${format}`
      }
    },
    rollupOptions: {
      external: (id) => {
        if (id.startsWith('.') || path.isAbsolute(id))
          return false;

        return externalPackages.some(
          (pkgName) => id === pkgName || id.startsWith(`${pkgName}/`)
        );
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
        },
      },
    },
  },
});
