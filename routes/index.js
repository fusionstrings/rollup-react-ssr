const { Router } = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const template = require('./../components/template');
const App = require('./../dist/cjs');

const router = Router();

router.get('/', (req, res, next) => {
	try {
		const content = template.split('___content___');
		res.write(content[0]);
		const context = {};
		const stream = ReactDOMServer.renderToNodeStream(
			React.createElement(App, { url: req.url, context: {} })
		);
		stream.pipe(res, { end: false });
		stream.on('end', () => {
			res.write(content[1]);
			res.end();
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
