import React from 'react';

class AddVeggieForm extends React.Component {
	createVeggie(event){
		event.preventDefault();
		console.log('create');
		//console.log(this.name.value);

		//const=var
		const veggie = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		}
		this.props.addVeggie(veggie);
		console.log(veggie);
		this.veggieForm.reset();
	}
	render(){
		return(
			<form ref ={(input) => this.veggieForm = input} className="veggie-edit" onSubmit={(e) => this.createVeggie(e)}>
				<input ref ={(input) => this.name = input} type="text" placeholder="Veggie Name"/>
				<input ref ={(input) => this.price = input} type="text" placeholder="Veggie Price"/>
				<select ref ={(input) => this.status = input}>
					<option value="available">Frais !</option>
					<option value="unavailable">Y'en as plus!</option>
				</select>
				<textarea ref ={(input) => this.desc = input} placeholder="Veggie Desc"></textarea>
				<input ref ={(input) => this.image = input} type="text" placeholder="Veggie Image"/>
				<button type="submit">+ Ajouter un article</button>
			</form>


			)
	}
}

export default AddVeggieForm;