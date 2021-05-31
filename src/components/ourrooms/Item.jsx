import React from 'react';

const Item = ({ clase, image, room, price }) => {
	return (
		<div className={`carousel-item ${clase}`} room="solo">
			{image}
			<div className="h-25 w-100 d-flex justify-content-around  align-items-center">
				<div className="w-75 d-flex flex-column justify-content-center align-items-center">
					<h2>{room}</h2>
					<div style={{ fontSize: '12px', listStyle: 'none' }} className="d-flex justify-content-around">
						<di>
							<li>Desayuno Buffet </li>
							<li>Ingreso a trochas de obación de aves</li>
						</di>
						<div>
							<li>Ingreso a observatorio de colibries</li>
							<li>Ingreso a jardines de orquídeas</li>
						</div>
					</div>
				</div>
				<div className="w-25">
					<h1>{price}</h1>
				</div>
			</div>
		</div>
	);
};

export default Item;
