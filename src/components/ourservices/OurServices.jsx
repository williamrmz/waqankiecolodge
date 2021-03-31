import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function OurServices() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            description
                        }
                    }
                }
            }
        }
    `);
    return (
        <section
            style={{
                backgroundColor: "#EEEEEE",
                position: "relative",
            }}
            id="servicios"
            className="vh-100 w-100"
        >
            <div className="container-fluid  d-flex align-self-stretch">
                {data.allMarkdownRemark.edges.map((service, key) => (
                    <React.Fragment key={service.node.frontmatter.title}>
                        <h3>{service.node.frontmatter.title}</h3>
                        <p>{service.node.frontmatter.description}</p>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
