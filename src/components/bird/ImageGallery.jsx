import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageGallery = () => {
    const data = useStaticQuery(graphql`
        query {
            infoaves: allFile(filter: { sourceInstanceName: { eq: "aves" } }) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(placeholder: NONE)
                        }
                        id
                        name
                    }
                }
            }
        }
    `);

    return (
        <>
            {data.infoaves.edges.map((ave) => (
                <div className="col-lg-3 col-md-4 col-6">
                    <div className="d-block mb-4 h-100">
                        <GatsbyImage key={ave.node.id} image={getImage(ave.node)} alt={ave.node.name} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default ImageGallery;