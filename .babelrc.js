module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
				spec: true,
				debug: true,
				useBuiltIns: 'usage',
				forceAllTransforms: true,
				targets: {
					browsers: ['Last 2 versions', '> 3%'],
					node: '6'
				}
			}
		],
		[
			'@babel/preset-react',
			{
				development: process.env.NODE_ENV !== 'production',
				useBuiltIns: true
			}
		]
	],
	plugins: [
		'@babel/transform-arrow-functions',
		['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
		[
			'@babel/plugin-transform-runtime',
			{
				useESModules: true,
				useBuiltIns: true
			}
		]
	]
};
