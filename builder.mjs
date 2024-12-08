import * as esbuild from 'esbuild'

// CommonJS build
await esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: 'dist/index.cjs.js',
  platform: 'node',
  format: 'cjs',
  sourcemap: true,
  minify: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
  external: ['react', 'react-dom'],
})

// ESModule build
await esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: 'dist/index.esm.js',
  platform: 'node',
  loader: { '.js': 'jsx' },
  target: ['node12'],
  format: 'esm',
  sourcemap: true,
  minify: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
  external: ['react', 'react-dom'],
})
