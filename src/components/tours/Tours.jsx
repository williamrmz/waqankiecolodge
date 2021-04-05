import React from 'react';
import Card from './Card';
import { StaticImage } from 'gatsby-plugin-image';

const Tours = () => {
	return (
		<section
			style={{
				backgroundColor: '#85c43f',
			}}
			id="catalogue"
			className="d-flex flex-column vh-100 w-100 justify-content-center align-items-center"
		>
			<div className="mb-4">
				<h1>Nuestros TOURS</h1>
			</div>
			<div className="container h-75 d-flex flex-column justify-content-evenly align-items-center">
				<Card
					image={
						<StaticImage
							className="tour-border tour-image"
							src={'../../images/Buff_tailed_skilebill.jpg'}
							alt="MainImage"
						/>
					}
					title={'CATÁLOGO DE AVES'}
					description={
						'Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico.'
					}
				/>
				<Card
					image={
						<StaticImage
							className="tour-border tour-image"
							src={'../../images/Buff_tailed_skilebill.jpg'}
							alt="MainImage"
						/>
					}
					title={'CATÁLOGO DE AVES'}
					description={
						'Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico.'
					}
				/>
				<Card
					image={
						<StaticImage
							className="tour-border tour-image"
							src={'../../images/Buff_tailed_skilebill.jpg'}
							alt="MainImage"
						/>
					}
					title={'CATÁLOGO DE AVES'}
					description={
						'Paraiso de orquideas y aves, un viaje que permite a los amantes de la naturaleza un memorable acercamiento a este mundo mágico.'
					}
				/>
			</div>
		</section>
	);
};

export default Tours;
