import React from 'react';

const Card = ({ image, title, description }) => {
	return (
		<div className="card w-25">
			{image}
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
			</div>
		</div>
	);
};

export default Card;
