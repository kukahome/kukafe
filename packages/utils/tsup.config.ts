import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV

export default defineConfig({
  splitting: false,
  sourcemap: env === 'prod', // source map is only available in prod
  clean: true, // rimraf dist
  dts: true, // generate dts file for main module
  format: ['cjs', 'esm'], // generate cjs and esm files
  legacyOutput: false,
  minify: false,
  bundle: env === 'production',
  skipNodeModulesBundle: true,
  watch: env === 'development',
  target: 'es2015',
  outDir: 'dist',
  entry: ['src/**/*.ts'],
  // entry: ['src/index.ts'],
})
