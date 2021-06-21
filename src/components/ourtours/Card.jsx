import React from 'react';
import { Icon } from '@iconify/react';
import eyeOutline from '@iconify-icons/mdi/eye-outline';
import { Link } from 'gatsby-plugin-react-i18next';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Card = ({ image, title, rute, delay }) => {
	const { t } = useTranslation();
	return (
		<div
			className="position-relative m-2 tour-card-container tour-border"
			data-sal="slide-down"
			data-sal-duration="1000"
			data-sal-delay={delay}
			data-sal-easing="ease"
		>
			{image}
			<div className="tour-card-overlay tour-border">
				<div className="w-100">
					<h5 className="card-title">{title}</h5>
					<div className="btn btn-outline btn-service">
						<Link style={{ textDecoration: 'none' }} to={'/' + rute}>
							<span className="text-white me-2">{t('boton-ver-mas')}</span>
							<Icon icon={eyeOutline} className="text-white" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
