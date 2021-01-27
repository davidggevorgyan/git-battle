import React from 'react';
import NotFoundImg from '../assets/undraw_page_not_found_su7k.svg';

export default function NotFound() {
	return (
		<img
			src={NotFoundImg}
			className="error-img"
			alt={"The page you are looking for doesn't exist"}
		/>
	);
}
