import React from "react";
// import WaqankiVideo from "../../videos/waqanki.mp4"
import LazyLoad from "react-lazyload";

export default function PromocionalVideo() {
    return (
        <section>
            <div className="video-container">
                <LazyLoad>
                    <video muted autoPlay loop controls>
                        <source src="https://waqankilodge.pe/video/waqanki.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </LazyLoad>
            </div>
        </section>
    );
}
