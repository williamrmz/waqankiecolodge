import React from 'react';
import '../styles/global.css';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../sass/custom.css';
import { Link } from 'gatsby';
import Reserve from '../components/reserve/Reserve';
import Catalogue from '../components/catalogue/Catalogue';

const IndexPage = () => {
	return (
		<div className="container-fluid p-0">
			<nav
				className="navbar navbar-expand-lg navbar-light "
				style={{ position: 'absolute', top: '0', left: '0', right: '0', zIndex: 4 }}
			>
				<div className="container-fluid">
					{/* <a className="navbar-brand" href="#" >
						Navbar
					</a> */}

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-link text-white active" aria-current="page" to={'#'}>
								Inicio
							</Link>
							<Link className="nav-link text-white" to="#servicios">
								Servicios
							</Link>
							<Link className="nav-link text-white" to="#">
								Reservas
							</Link>
							<Link className="nav-link text-white" to="#">
								Catálogos
							</Link>
						</div>
					</div>
				</div>
			</nav>

			<header className="vh-100 w-100 header" id="inicio">
				<div className="h-100 w-50 d-flex justify-content-center align-items-center flex-column m-auto">
					<p className="h1 text-center  text-white">WAQANKI ECO LODGE</p>
					<p className="h6 text-center  text-white">
						Mas de 250 especies de orquídeas, plantas ornamentales, mirador para la observación de
						colibrís, senderos de observación de aves, mariposas, anfibios y la ruta del café.
					</p>
				</div>
				<div className="header-wave">
					<svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-100 w-100">
						<path
							d="M-18.34,96.20 C174.09,44.89 372.74,185.03 501.97,116.94 L500.00,150.00 L0.00,150.00 Z"
							style={{ stroke: 'none', fill: '#EEEEEE' }}
						></path>
					</svg>
				</div>
			</header>

			<main>
				<section
					style={{
						backgroundColor: '#EEEEEE',
						position: 'relative',
					}}
					id="servicios"
					className="vh-100 w-100"
				>
					<div className="container-fluid  d-flex">
						<div>
							<div
								id="carouselExampleSlidesOnly"
								className="carousel slide"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											src="https://pbs.twimg.com/profile_images/1135999619781939201/HZ-pCQcP_400x400.png"
											className="d-block w-100"
											alt="imagen"
										/>
									</div>
									<div className="carousel-item">
										<img
											src="https://cdn.auth0.com/blog/gatsby-react-webtask/logo.png"
											className="d-block w-100"
											alt="imagen"
										/>
									</div>
									<div className="carousel-item">
										<img
											src="https://cdn.auth0.com/blog/illustrations/gatsbyjs.png"
											className="d-block w-100"
											alt="imagen"
										/>
									</div>
								</div>
							</div>
						</div>

						<div></div>
					</div>
				</section>

				<Reserve />

				<Catalogue />
			</main>
		</div>
	);
};

export default IndexPage;
