import React from 'react';

const Form = ({ sendInfo, handleChange }) => {
	return (
		<form className="w-75 p-1">
			<div className="w-100 d-flex flex-column justify-content-center align-items-center">
				<h3 className="mb-3">RESERVAR ATENCIÓN</h3>

				<input
					className="form-control mb-2"
					type="text"
					name="name"
					placeholder="Nombres"
					aria-label="Nombres"
					onChange={handleChange}
				/>

				<input
					className="form-control mb-2"
					type="text"
					name="lastname"
					placeholder="Apellidos"
					aria-label="Apellidos"
					onChange={handleChange}
				/>

				<input
					className="form-control mb-2"
					type="text"
					name="email"
					placeholder="Correo"
					aria-label="Correo"
					onChange={handleChange}
				/>

				<input
					className="form-control mb-2"
					type="text"
					name="telf"
					placeholder="Teléfono"
					aria-label="Teléfono"
					onChange={handleChange}
				/>

				<input
					className="form-control mb-2"
					type="text"
					name="incomeDate"
					placeholder="Fecha de Llegada"
					aria-label="Fecha de Llegada"
					onChange={handleChange}
				/>

				<input
					className="form-control mb-4"
					type="text"
					name="leaveDate"
					placeholder="Fecha de Salida"
					aria-label="Fecha de Salida"
					onChange={handleChange}
				/>

				<button type="button" className="btn btn-dark w-75" onClick={() => sendInfo()}>
					RESERVAR
				</button>
			</div>
		</form>
	);
};

export default Form;
