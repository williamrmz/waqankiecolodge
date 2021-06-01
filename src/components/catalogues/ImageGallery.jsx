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
                            gatsbyImageData(placeholder: BLURRED)
                        }
                        id
                        name
                    }
                }
            }
        }
    `);

    const compare = (a, b) => {
        // Use toUpperCase() to ignore character casing
        const nameA = a.node.name.toUpperCase();
        const nameB = b.node.name.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    };

    return (
        <>
            {/* {console.log(data.infoaves.edges.sort(compare))} */}
            {data.infoaves.edges.sort(compare).map((ave) => (
                <div key={ave.node.id} className="col-lg-4 col-md-4 col-12">
                    <div className="d-block mb-4 h-100">
                        <span className="text-white">{ave.node.name}</span>
                        {console.log(ave.node.name)}
                        <GatsbyImage image={getImage(ave.node)} alt={ave.node.name} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default ImageGallery;
