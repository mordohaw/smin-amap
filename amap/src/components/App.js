import React from 'react';

import StorePicker from './StorePicker';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			veggies: {

			}
		}
		this.addVeggie = this.addVeggie.bind(this);
	}

	addVeggie(veggie){
		//maj du state + ajout nouveaux legumes + appliquer le state
		const veggies = {...this.state.veggies};
		veggies["veggie-1"] = veggie;



		this.setState({veggies});
	}
	render(){
		return(

			
			<div className="amap">
			
			<div className="menu">
				<Header tagline="Des bons légumes"/>
			</div>
				{/*<StorePicker/>*/}

				
				<Order/>
				<Inventory addVeggie={this.addVeggie}/>
			</div>
			


			)
	}
}

export default App;