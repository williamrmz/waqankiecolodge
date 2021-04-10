import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HeaderTour = ({ tourSelect }) => {
	return (
		<header
			className="vh-100 w-100 header-tour animate__animated animate__fadeInDown"
			id="inicioTour"
		>
			<div className="position-relative h-65">
				<StaticImage className="tourpage-image" src={'../../images/tour1.jpg'} alt="Luna 1" />
				<div className="tourpage-title-overlay text-white">
					<h1>{tourSelect.title}</h1>
				</div>
			</div>
			<div className="h-35 d-flex flex-column justify-content-center align-items-center mt-3">
				<p className="h5 w-65 text-center">
					Este itinerario abarca la amazonia y áreas bajas a lo largo del rio Marañón, bosques
					tropicales, bosques nublados, bosque seco de la parte alta del Marañón, bosques secos de
					la parte costa del Perú, etc.
				</p>
				<p className="h5 w-65 text-center">
					El cliente puede elegir el área en que desea viajar o las aves que necesita ver o
					fotografiar y nosotros organizamos su viaje de la mejor manera con un mínimo de 5 días del
					itinerario.
				</p>
			</div>
		</header>
	);
};

export default HeaderTour;