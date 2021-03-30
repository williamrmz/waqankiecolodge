import React from "react";

const Form = () => {
    return (
        <form className="d-flex flex-column">
            <h3>RESERVAR ATENCIÓN</h3>
            <label htmlFor="names">
                <input type="text" name="names" id="names" placeholder="Nombres y Apellidos" />
            </label>
            <label htmlFor="email">
                <input type="text" name="email" id="email" placeholder="Correo" />
            </label>
            <label htmlFor="telf">
                <input type="text" name="telf" id="telf" placeholder="Teléfono" />
            </label>
            <label htmlFor="income-date">
                <input type="text" name="income-date" id="income-date" placeholder="Fecha de Llegada" />
            </label>
            <label htmlFor="leave-date">
                <input type="text" name="leave-date" id="leave-date" placeholder="Fecha de Salida" />
            </label>
            <button>RESERVAR</button>
        </form>
    );
};

export default Form;
