import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.tsx',
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
  plugins: [
    typescript(),
    commonjs(),
    resolve({
    // 将自定义选项传递给解析插件
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  })],
  // 指出应将哪些模块视为外部模块
  external: ['react', 'react-dom'],
}
