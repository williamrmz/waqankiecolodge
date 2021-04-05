import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Carousel = () => {
	return (
		<div id="carouselReserve" className="carousel slide" data-bs-interval="false">
			<div className="carousel-inner reserve-carousel reserve-container-room">
				<div className="carousel-item active" room="solo">
					<StaticImage className="reserve-img" src="../../images/1.jpg" alt="Imagen 1" />
					<div className="d-flex justify-content-around justify-content-center align-items-center">
						<div className="d-flex flex-column">
							<h2>Habitacion SOLO</h2>
							<div></div>
						</div>
						<div>
							<h1>$70</h1>
						</div>
					</div>
				</div>
				<div className="carousel-item" room="doble">
					<StaticImage className="reserve-img" src="../../images/1.jpg" alt="Imagen 2" />
					<div className="d-flex justify-content-around justify-content-center align-items-center">
						<div className="d-flex flex-column">
							<h2>Habitacion DOBLE</h2>
						</div>
						<div>
							<h1>$90</h1>
						</div>
					</div>
				</div>
				<div className="carousel-item" room="triple">
					<StaticImage className="reserve-img" src="../../images/1.jpg" alt="Imagen 3" />
					<div className="d-flex justify-content-around justify-content-center align-items-center">
						<div className="d-flex flex-column">
							<h2>Habitacion TRIPLE</h2>
						</div>
						<div>
							<h1>$120</h1>
						</div>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselReserve"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselReserve"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Carousel;
