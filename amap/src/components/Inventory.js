import React from 'react';
import AddVeggieForm from './AddVeggieForm';

class Inventory extends React.Component {
<<<<<<< HEAD
	render(){
		return(
			<div>
				<p>Inventory</p>
				<AddVeggieForm addVeggie={this.props.addVeggie} />
			</div>


			)
	}
}

export default Inventory;
=======
  render() {
    return (
      <div>
        <p>Inventory</p>
        <AddVeggieForm addVeggie={this.props.addVeggie}/>
        <button onClick={this.props.loadSamples}>Charger des légumes</button>
      </div>
    )
  }
}

export default Inventory;
>>>>>>> d5301965adb10dc9e234f348af9dbde3395ddbfa
