import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import minify from 'rollup-plugin-babel-minify';
import analyze from 'rollup-analyzer-plugin';
import pkg from './package.json';

const {
	name,
	main,
	module,
	browser,
	dependencies = {},
	devDependencies = {},
	peerDependencies = {}
} = pkg;

const productionBuild = process.env.NODE_ENV === 'production';

const DEV =
	typeof process === 'undefined' ||
	!process.env ||
	process.env.NODE_ENV !== 'production';

const plugins = [
	replace({
		'process.env.NODE_ENV': JSON.stringify(
			process.env.NODE_ENV || 'production'
		)
	}),
	nodeResolve({
		module: true,
		jsnext: true,
		browser: true,
		main: true
	}),
	babel({ runtimeHelpers: true, exclude: 'node_modules/**' }),
	commonjs({ include: 'node_modules/**' }),
	productionBuild && minify(),
	analyze()
];

export default [
	{
		input: './components/index.js',
		plugins,
		context: 'window',
		output: {
			file: browser,
			format: 'umd',
			sourcemap: true,
			name
		}
	},
	{
		input: './components/server.js',
		plugins,
		external: ['react', 'react-dom', 'react-dom/server'],
		output: {
			file: main,
			format: 'cjs',
			sourcemap: true
		}
	},
	{
		input: './components/app.js',
		plugins,
		external: [
			...Object.keys(dependencies).map(d => d !== '@babel/runtime'),
			...Object.keys(peerDependencies),
			...Object.keys(devDependencies)
		],
		output: {
			file: module,
			format: 'es',
			sourcemap: true
		}
	}
];
