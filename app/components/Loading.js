import React from 'react';
import PropTypes from 'prop-types';
import '../styles/loading.scss';

export default function Loading({ message = 'Loading' }) {
	const [dynamicMessage, setDynamicMessage] = React.useState(message);
	React.useEffect(() => {
		const interval = window.setInterval(() => {
			setDynamicMessage((d) => (d === `${message}...` ? message : `${d}.`));
		}, 300);
		return () => window.clearInterval(interval);
	}, [message]);

	return <h2 className="loading">{dynamicMessage}</h2>;
}

Loading.propTypes = {
	message: PropTypes.string,
};
