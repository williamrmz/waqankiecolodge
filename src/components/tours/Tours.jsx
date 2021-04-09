import React from 'react';
import Card from './Card';
import { StaticImage } from 'gatsby-plugin-image';

const Tours = () => {
	return (
		<section
			style={{
				backgroundColor: '#85c43f',
				height: '200vh',
			}}
			id="tours"
			className="d-flex flex-column w-100 justify-content-center align-items-center"
		>
			<div className="mb-4">
				<h1>Nuestros TOURS</h1>
			</div>
			<div className="container h-75 d-flex flex-column justify-content-evenly align-items-center">
				<Card
					image={
						<StaticImage
							className="tour-border tour-image"
							src={'../../images/tour1.jpg'}
							alt="Luna 1"
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
							src={'../../images/tour2.jpg'}
							alt="Luna 2"
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
							src={'../../images/tour3.jpg'}
							alt="Luna 3"
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
							src={'../../images/tour4.jpg'}
							alt="Luna 4"
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
