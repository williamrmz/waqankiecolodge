import React from 'react';
import { Link } from 'gatsby';

const Card = ({ image, title, description, ruta }) => {
	return (
		<div className="card w-35 catalogue-card text-center">
			{image}
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				{/*  stretched-link */}
				{/* <a href="" className="btn btn-primary">
					Ver más
				</a> */}
				<Link className="btn btn-success" to={`/${ruta}`}>
					Ver más
				</Link>
			</div>
		</div>
	);
};

export default Card;
