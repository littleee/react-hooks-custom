import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: './src/index.tsx',
  // output: {
  //   file: 'dist/index.js',
  //   format: 'cjs'
  // },
  output: [
  {
    format: 'cjs',
    file: pkg['main']
  },
  {
    format: 'es',
    file: pkg['module']
  }
],
  plugins: [typescript()]
}
