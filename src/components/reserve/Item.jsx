import React from "react";

const Item = ({ clase, image, room, price }) => {
    return (
        <div className={`carousel-item ${clase}`} room="solo">
            {image}
            <div className="d-flex justify-content-around justify-content-center align-items-center">
                <div className="d-flex flex-column">
                    <h2>{room}</h2>
                    <div></div>
                </div>
                <div>
                    <h1>{price}</h1>
                </div>
            </div>
        </div>
    );
};

export default Item;
