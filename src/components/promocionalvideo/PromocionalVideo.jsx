import React from "react";
// import WaqankiVideo from "../../videos/waqanki.mp4"

export default function PromocionalVideo() {
    return (
        <section style={{ backgroundColor: "#eeeeee" }}>
            <div className="video-container">
                <video muted loop controls>
                    <source src="https://waqankilodge.pe/video/waqanki.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}
