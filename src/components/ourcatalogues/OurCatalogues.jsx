import React from 'react';
import Card from './Card';
import CardInverse from './CardInverse';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const OurCatalogues = () => {
	const { t } = useTranslation();
	const imagebird = (
		<StaticImage
			className="catalogue-card-image w-100"
			src={'../../images/catalogue_ave.jpg'}
			alt="card-bird"
			placeholder="none"
			style={{ margin: '-1px' }}
		/>
	);

	const imageflower = (
		<StaticImage
			className="catalogue-card-imageinverse w-100"
			src={'../../images/catalogue_orquide.jpg'}
			alt="card-flower"
			placeholder="none"
			style={{ margin: '-1px' }}
		/>
	);
	return (
		<section
			id="catalogos"
			className="section-cataloge d-flex flex-column justify-content-center align-items-center pb-4"
		>
			<div
				className="mt-2 mb-4"
				// data-sal="slide-down"
				// data-sal-duration="1000"
				// data-sal-delay="300"
				// data-sal-easing="ease"
			>
				<h1 className="section-title text-white">{t(`seccion-catalogues`)}</h1>
			</div>
			<div className="container-catalogue d-flex justify-content-evenly vh-75">
				<Card
					image={imagebird}
					title={t(`catalogues-titulo-aves`)}
					description={t(`catalogues-description-aves`)}
					ruta={'aves'}
				/>
				<CardInverse
					image={imageflower}
					title={t(`catalogues-titulo-orquides`)}
					description={t(`catalogues-description-orquides`)}
					ruta={'orquideas'}
				/>
			</div>
		</section>
	);
};

export default OurCatalogues;
