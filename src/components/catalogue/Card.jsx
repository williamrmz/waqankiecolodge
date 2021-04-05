import React from 'react';

const Card = ({ image, title, description }) => {
	return (
		<div className="card w-35 catalogue-card text-center">
			{image}
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				{/*  stretched-link */}
				{/* <a href="#" className="btn btn-primary">
					Ver más
				</a> */}
			</div>
		</div>
	);
};

export default Card;
