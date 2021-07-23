import React from "react";
// import WaqankiVideo from "../../videos/waqanki.mp4"
import LazyLoad from "react-lazyload";

export default function PromocionalVideo() {
    return (
        <section>
            <div className="video-container">
                <LazyLoad>
                    {/* <video muted autoPlay loop controls>
                        <source src="https://waqankilodge.pe/video/waqanki.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/cuVvEl1qJds"
                        title="Waqanki youtbe video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </LazyLoad>
            </div>
        </section>
    );
}
