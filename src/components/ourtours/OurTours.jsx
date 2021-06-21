import React from 'react';
import Card from './Card';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const OurTours = () => {
	const { t } = useTranslation();
	return (
		<section id="tours" className="section-tours d-flex flex-column w-100 justify-content-center align-items-center">
			<div
				className="mb-4 mt-5 text-center text-white"
				data-sal="slide-down"
				data-sal-duration="700"
				// data-sal-delay="300"
				data-sal-easing="ease"
			>
				<h2 style={{ fontWeight: 'bolder', fontSize: '2rem' }}>
					{t('Nuestros')} <strong>{t('seccion-tour')}</strong>
				</h2>
				<p>{t('seccion-tour-descripcion')}</p>
			</div>

			<div className="tour-container-card">
				<Card
					delay="150"
					image={
						<StaticImage
							className="tour-border tour-image"
							src={'../../images/tour_main.jpg'}
							alt="Luna 1"
							placeholder="none"
						/>
					}
					title={'Northen Perú Itinerary'}
					rute={'tour-main'}
				/>
				<Card
					delay="300"
					image={
						<StaticImage
							className="tour-border tour-image"
							src={'../../images/tour_scarlet.jpg'}
							alt="Luna 2"
							placeholder="none"
						/>
					}
					title={'Scarlet Banded Barbet'}
					rute={'tour-scarlet'}
				/>
				<Card
					delay="450"
					image={
						<StaticImage
							className="tour-border tour-image"
							src={'../../images/tour_white.jpg'}
							alt="Luna 3"
							placeholder="none"
						/>
					}
					title={'White-Masked Antbird'}
					rute={'tour-white'}
				/>
				<Card
					delay="600"
					image={
						<StaticImage
							className="tour-border tour-image"
							src={'../../images/tour_yellow.jpg'}
							alt="Luna 4"
							placeholder="none"
						/>
					}
					title={'Yellow Faced Parrotlet-Purple Backed Sunbean'}
					rute={'tour-yellow'}
				/>
			</div>
		</section>
	);
};

export default OurTours;
