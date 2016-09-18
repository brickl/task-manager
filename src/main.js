import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var appElement = document.getElementById("app");

appElement.content = "hello world";

if(appElement != null) {
	console.log("hi");
}

ReactDOM.render(<App/>, appElement);