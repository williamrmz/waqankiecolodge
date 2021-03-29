import React from 'react';
import Carousel from './Carousel';
import Form from './Form';
import Description from './Description';

const Reserve = () => {
	return (
		<section
			style={{
				backgroundColor: '#aaaaee',
			}}
			id="habitaciones"
			className="d-flex vh-100 w-100 justify-content-center align-items-center"
		>
			<div className="container container-reserve d-flex h-75 m-0 p-0">
				<div className="w-60 h-100 d-flex flex-column ">
					<div className="h-75 carousel-reserve" style={{ backgroundColor: '#11ff22' }}>
						<Carousel />
					</div>
					<div className="h-25 description-reserve" style={{ backgroundColor: '#419822' }}>
						<Description />
					</div>
				</div>
				<div className="w-40 h-100 form-reserve" style={{ backgroundColor: '#993355' }}>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Reserve;
