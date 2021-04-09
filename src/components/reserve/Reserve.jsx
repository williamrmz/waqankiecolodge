import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Form from './Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Reserve = () => {
	const { t } = useTranslation();
	const [reservation, setReservation] = useState({
		name: '',
		lastname: '',
		email: '',
		telf: '',
		incomeDate: '',
		leaveDate: '',
		room: '',
	});

	const obtainRoom = (e) => {
		let carouselEl = document.getElementById('carouselReserve');
		let carouselActive = carouselEl.getElementsByClassName('active')[0];
		let roomini = carouselActive.getAttribute('room');
		setReservation((prevState) => ({
			...prevState,
			room: roomini,
		}));

		document.getElementById('carouselReserve').addEventListener('slid.bs.carousel', function (e) {
			let room = document
				.getElementById('carouselReserve')
				.getElementsByClassName('active')[0]
				.getAttribute('room');
			setReservation((prevState) => ({
				...prevState,
				room,
			}));
		});
	};

	const sendInfo = () => {
		console.log(reservation);
	};

	useEffect(() => {
		const fetchData = async () => {
			await obtainRoom();
		};
		fetchData();
		//eslint-disable-next-line
	}, []);

	const handleChange = (e) => {
		setReservation((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section
			id="habitaciones"
			className="d-flex flex-column vh-100 w-100 justify-content-center align-items-center reserve-section"
		>
			<div className="mb-4">
				<h1>{t(`seccion-habitaciones`)}</h1>
			</div>
			<div className="container reserve-container d-flex h-75 m-0 p-0">
				<div className="w-65 h-100 d-flex flex-column ">
					<Carousel />
				</div>
				<div className="w-35 h-100 reserve-form d-flex justify-content-center align-items-center">
					<Form sendInfo={sendInfo} handleChange={handleChange} />
				</div>
			</div>
			<div className="reserve-wave">
				<svg viewBox="0 0 500 150" preserveAspectRatio="none" className="reserve-wave-svg">
					<path
						d="M-1.97,94.23 C62.92,69.56 362.58,106.08 500.84,86.34 L500.00,150.00 L-1.41,151.47 Z"
						className="reserve-wave-path"
					></path>
				</svg>
			</div>
		</section>
	);
};

export default Reserve;
