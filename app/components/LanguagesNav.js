import React from 'react';
import PropTypes from 'prop-types';

export default function LanguagesNav( { languages, selectedLanguage, onUpdateLanguage } ) {
	return (
		<nav>
			<ul>
				{
					languages.map( ( el, index ) => (
						<li
							onClick={() => onUpdateLanguage( el ) }
							key={el + index}>
							<a className={ selectedLanguage === el ? 'active' : null}>
								{ el }
							</a>
						</li>
					) )
				}
			</ul>
		</nav>

	);
}

LanguagesNav.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	languages: PropTypes.arrayOf( PropTypes.string ).isRequired,
	onUpdateLanguage: PropTypes.func.isRequired,
};
