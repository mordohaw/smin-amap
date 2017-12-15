<<<<<<< HEAD
// c'est parti !
//git pull -f -> force
import React from 'react';
import { render } from 'react-dom';
//own component import
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import './css/style.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Root = () => {
	return(
	<Router>
		<Switch>
			<Route exact path="/" component={StorePicker}/>
			<Route path="/store/:storeId" component={App}/>
			<Route component={NotFound}/>
		</Switch>
	</Router>
	)
}

render(<Root/>, document.querySelector('#main'));


/*if (window.location.pathname == "/store") {
	render(<App/>, document.querySelector('#main'));
}else if(window.location.pathname == "/"){
	render(<StorePicker/>, document.querySelector('#main'));
}else{
	render(<NotFound/>, document.querySelector('#main'));
}*/



=======
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />

         {/* La <Route> qui suit n'a pas de "path", donc elle va
         toujours matcher. Cela veut dire que NotFound va
         s'afficher quand aucun des autre <Route>s ne match l'url actuelle. */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

render(<Root/>, document.querySelector('#main'));
>>>>>>> d5301965adb10dc9e234f348af9dbde3395ddbfa
