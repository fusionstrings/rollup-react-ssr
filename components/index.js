import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

function run(){
	const root = document.getElementById('root');
	if(root.dataset.ssr === 'true'){
		ReactDOM.hydrate(<App />, root);
	} else {
		ReactDOM.render(<App />, root);
	}
}

run();