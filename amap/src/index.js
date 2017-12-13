// c'est parti !
//git pull -f -> force
import React from 'react';
import { render } from 'react-dom';
//own component import
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import './css/style.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

if (window.location.pathname == "/store") {
	render(<App/>, document.querySelector('#main'));
}else if(window.location.pathname == "/"){
	render(<StorePicker/>, document.querySelector('#main'));
}else{
	render(<NotFound/>, document.querySelector('#main'));
}

