import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Form from "./Form";

const Reserve = () => {
    const [reservation, setReservation] = useState({
        name: "",
        lastname: "",
        email: "",
        telf: "",
        incomeDate: "",
        leaveDate: "",
        room: "",
    });

    const obtainRoom = (e) => {
        let carouselEl = document.getElementById("carouselReserve");
        let carouselActive = carouselEl.getElementsByClassName("active")[0];
        let roomini = carouselActive.getAttribute("room");
        setReservation((prevState) => ({
            ...prevState,
            room: roomini,
        }));

        document.getElementById("carouselReserve").addEventListener("slid.bs.carousel", function (e) {
            let room = document.getElementById("carouselReserve").getElementsByClassName("active")[0].getAttribute("room");
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
            style={{
                backgroundColor: "skyblue",
            }}
            id="habitaciones"
            className="d-flex vh-100 w-100 justify-content-center align-items-center"
        >
            <div className="container container-reserve d-flex h-75 m-0 p-0">
                <div className="w-65 h-100 d-flex flex-column ">
                    <Carousel obtainRoom={obtainRoom} />
                </div>
                <div className="w-35 h-100 form-reserve d-flex justify-content-center align-items-center">
                    <Form sendInfo={sendInfo} handleChange={handleChange} />
                </div>
            </div>
        </section>
    );
};

export default Reserve;
