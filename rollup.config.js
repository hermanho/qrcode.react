import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

export default {
  input: './src/index.tsx',
  plugins: [
    replace({
      __VERSION__: pkg.version,
    }),
    typescript({declaration: true}),
    json(),
    nodeResolve(),
    commonjs(),
  ],
  output: [
    {
      format: 'es',
      file: pkg.es,
      sourcemap: true,
    },
    {
      format: 'cjs',
      file: pkg.main,
      sourcemap: true,
    },
  ],
};
