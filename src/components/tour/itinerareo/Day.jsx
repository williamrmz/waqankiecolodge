import React from 'react';

const Day = ({ day, paragraph }) => {
	return (
		<li>
			<h3>{day}</h3>
			<p>{paragraph}</p>
		</li>
	);
};

export default Day;
