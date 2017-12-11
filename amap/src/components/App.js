import React from 'react';

import StorePicker from './StorePicker';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';

class App extends React.Component {
	render(){
		return(

			
			<div className="amap">
			
			<div className="menu">
				<Header tagline="Des bons légumes"/>
			</div>
				{/*<StorePicker/>*/}

				
				<Order/>
				<Inventory/>
			</div>
			


			)
	}
}

export default App;