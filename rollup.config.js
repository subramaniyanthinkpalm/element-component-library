import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: pkg.source,
    // external: ['./dropdown.css'],
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        external(),
        postcss({

            plugins: [
                simplevars(),
                nested(),
                cssnext({ warnForDuplicates: false, }),
                cssnano(),
            ],
            extensions: ['.css','.less'],
            // modules: true,
            // minimize: true,
            // extensions: ['.css','.less'],
            // extract: path.resolve('dist/index-element.css'),
        }),
        // resolve({
        //     jsnext: true,
        //     main: true,
        //     browser: true,
        // }),
        // eslint({
        //     exclude: [
        //       'src/styles/**',
        //     ]
        // }),
        // commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};