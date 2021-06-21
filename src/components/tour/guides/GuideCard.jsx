import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Guide = () => {
	const { t } = useTranslation();
	return (
		<div className="position-relative mt-5 w-30 mx-auto mb-4">
			<div className="d-flex align-items-center justify-content-center pt-2 animate__animated animate__pulse animate__slow animate__repeat-3">
				<StaticImage
					className="image-profile-guide rounded-circle me-3"
					src={'../../../images/guia.jpg'}
					alt="Luna 1"
					placeholder="none"
				/>
				<div className="text-center">
					<h3>Carlos Altamirano</h3>
					<h6>{t('guia-especialista')}</h6>

					<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
						{t(`conoce-guia`)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Guide;
