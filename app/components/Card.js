import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {

	render() {
		const {
			header, subheader, avatar, href, name, children,
		} = this.props;
		return (
			<li className='gray-bg card'>
				<h2>{header}</h2>
				<img src={ avatar } alt= {`avatar for ${ name }`} />
				{ subheader && ( <h4>{ subheader.toLocaleString() }</h4> )}
				<h3><a href={href} > {name}</a></h3>
				{children}
			</li>
		);
	}

}

Card.propTypes = {
	header: PropTypes.string.isRequired,
	subheader: PropTypes.string,
	avatar: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	children: PropTypes.node,
};
