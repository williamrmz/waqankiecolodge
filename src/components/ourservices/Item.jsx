import React from 'react';
import { Icon } from '@iconify/react';

const Item = ({ titulo, descripcion, imagen, icon }) => {
	return (
		<div
			className="position-relative d-flex align-items-center justify-content-center card-service-container"
			style={{
				height: '405px',
			}}
		>
			{imagen}

			<div
				className="d-flex flex-column align-items-center justify-content-center text-center"
				style={{ color: 'white', zIndex: '2' }}
			>
				<h4 className="fw-bold my-2">{titulo}</h4>
				<Icon icon={icon} className="m-auto my-2" width="2em" height="2em" />
				<p>{descripcion}</p>
			</div>
		</div>
	);
};

export default Item;
