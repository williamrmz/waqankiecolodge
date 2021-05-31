import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next'; // npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon } from '@iconify/react';
import eyeOutline from '@iconify-icons/mdi/eye-outline';

const Card = ({ image, title, description, ruta, direction }) => {
	return (
		<div
			className="card w-35 catalogue-card text-center"
			data-sal={`slide-${direction}`}
			data-sal-duration="1000"
			data-sal-easing="ease"
		>
			<Link className="image-link-to" to={`/${ruta}`}>
				{image}
				<div
					className="btn-more-info"
					data-sal="slide-down"
					data-sal-duration="1000"
					data-sal-delay="300"
					data-sal-easing="ease"
				>
					<span style={{ marginRight: '1rem' }}>Ver más</span>
					<Icon icon={eyeOutline} className="ml-2" />
				</div>
			</Link>
			<div style={{ padding: '2.5rem' }}>
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
			</div>
		</div>
	);
};

export default Card;
