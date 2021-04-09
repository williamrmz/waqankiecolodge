import React from "react";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeaderTour from "../components/tour/HeaderTour";
import Tour from "../components/tour/Tour";

const tour = ({ location }) => {
    return (
        <div className="container-fluid p-0">
            <Layout>
                <HeaderTour ruta={location.state.ruta} />
                <main>
                    <Tour ruta={location.state.ruta} />
                </main>
            </Layout>
        </div>
    );
};

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: { ns: { in: ["tour"] }, language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;

export default tour;
