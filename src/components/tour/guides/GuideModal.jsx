import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const GuideModal = () => {
	const { t } = useTranslation();
	return (
		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Carlos Altamirano
						</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<div>
							<StaticImage className="my-3 w-100" src={'../../../images/guia.jpg'} alt="Luna 1" />
							<span className="text-center">{t('info-guia')}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GuideModal;
