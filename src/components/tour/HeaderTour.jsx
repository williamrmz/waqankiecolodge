import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const HeaderTour = ({ children, titulo }) => {
	const { t } = useTranslation();
	return (
		<header className="w-100 header-tour animate__animated animate__fadeInDown" id="inicioTour">
			<div className="position-relative h-65 tour-header-image">
				{children}
				<div className="tourpage-title-overlay text-white">
					<h1>{titulo}</h1>
				</div>
			</div>
			<div className="h-35 d-flex flex-column justify-content-center align-items-center mt-3 tour-header-text">
				<p className="h5 w-65 text-center">{t('tour-description1')}</p>
				<p className="h5 w-65 text-center">{t('tour-description2')}</p>
			</div>
		</header>
	);
};

export default HeaderTour;
