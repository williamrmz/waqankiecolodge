import React from 'react'

export default function PromocionalVideo() {
    return (
        <section style={{backgroundColor: "#eeeeee"}}>
            <div className="video-container">
                <video muted autoPlay loop controls>
                    <source src="http://waqankilodge.pe/video/waqanki.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}
