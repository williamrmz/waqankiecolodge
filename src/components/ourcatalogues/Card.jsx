import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next'; // npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon } from '@iconify/react';
import eyeOutline from '@iconify-icons/mdi/eye-outline';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Card = ({ image, title, description, ruta }) => {
	const { t } = useTranslation();
	return (
		<div className="card h-100 catalogue-card text-center">
			<div className="image-link-to h-50 d-flex justify-content-center">
				{image}
				<div className="btn-more-info" data-sal="slide-down" data-sal-duration="600" data-sal-easing="ease">
					<Link to={`/${ruta}`} style={{ textDecoration: 'none' }}>
						<span className="text-white me-2">{t('boton-ver-mas')}</span>
						<Icon icon={eyeOutline} className="text-white" />
					</Link>
				</div>
			</div>
			<div style={{ padding: '2.5rem' }}>
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
			</div>
		</div>
	);
};

export default Card;
