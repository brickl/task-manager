import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

var appElement = document.getElementById("app");


if(appElement != null) {
	//ReactDOM.render("hello", appElement);
	ReactDOM.render(<App />, appElement);

}

