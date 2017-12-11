import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
	render(){
		return(
			<header className="top">
				<h1>
					AMAP
				</h1>
				<h3><span>{this.props.tagline}</span></h3>
			</header>


			)
	}
}

export default Header;