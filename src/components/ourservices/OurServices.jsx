import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function OurServices() {
    const {languages, originalPath, t} = useI18next();
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
            className="vh-100 w-100 pt-5"
        >
            <div className="container-fluid align-self-stretch pt-5">
                <div className="d-flex justify-content-center">
                    <h2 style={{fontWeight: 'bolder'}}>NUESTROS <strong>SERVICIOS</strong></h2>
                </div>
                <div id="carouselReserve" className="carousel slide" data-bs-interval="false">
                    <div className="carousel-inner">
                        {[...Array((Math.ceil(data.allMarkdownRemark.edges.length/4))).keys()].map((a,i)=>
                            <div className={`carousel-item ${i==0 ? 'active' : '' }`}>
                                <div className="d-flex justify-content-center mt-5">
                                    <div className="d-flex justify-content-around justify-content-center card-service">
                                        <div className="d-flex flex-column">
                                            <div className="icon-service"></div>
                                            <h5 className="text-uppercase fw-bold mb-4">{data.allMarkdownRemark.edges[(i*3)].node.frontmatter.title}</h5>
                                            <p style={{textAlign: 'justify'}}>{data.allMarkdownRemark.edges[(i*3)].node.frontmatter.description}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around justify-content-center card-service">
                                        <div className="d-flex flex-column">
                                            <div className="icon-service"></div>
                                            <h5 className="text-uppercase fw-bold mb-4">{data.allMarkdownRemark.edges[(i*3)+1].node.frontmatter.title}</h5>
                                            <p style={{textAlign: 'justify'}}>{data.allMarkdownRemark.edges[(i*3)+1].node.frontmatter.description}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-around justify-content-center card-service">
                                        <div className="d-flex flex-column">
                                            <div className="icon-service"></div>
                                            <h5 className="text-uppercase fw-bold mb-4">{data.allMarkdownRemark.edges[(i*3)+2].node.frontmatter.title}</h5>
                                            <p style={{textAlign: 'justify'}}>{data.allMarkdownRemark.edges[(i*3)+2].node.frontmatter.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselReserve"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselReserve"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}