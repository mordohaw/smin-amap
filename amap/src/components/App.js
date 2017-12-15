import React from 'react';
<<<<<<< HEAD

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
=======
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleVeggies from '../sample-veggies';

class App extends React.Component {
  constructor() {
    super();

    this.addVeggie = this.addVeggie.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      veggies: {},
      order: {}
    };
  }

  addVeggie(veggie) {
    // mise à jour du state
    // on fait une copie de notre state
    const veggies = {...this.state.veggies};
    // ajout de notre nouveau veggie
    const timestamp = Date.now();
    veggies[`veggie-${timestamp}`] = veggie;
    // mise à jour du state
    this.setState({ veggies });
  }

  loadSamples() {
    this.setState({
      veggies: sampleVeggies
    });
  }

  render() {
    return (
      <div className="amap">
        <div className="menu">
          <Header tagline="Des bons legumes" />
        </div>
        <Order />
        <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
>>>>>>> d5301965adb10dc9e234f348af9dbde3395ddbfa
