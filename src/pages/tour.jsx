import React from "react";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeaderTour from "../components/tour/HeaderTour";
import Tour from "../components/tour/Tour";
import Guide from "../components/tour/guides/GuideCard";
import GuideModal from "../components/tour/guides/GuideModal";

const tour = () => {
    let state = JSON.parse(localStorage.getItem("state"));
    return (
        <div className="container-fluid p-0">
            <Layout>
                <HeaderTour tourSelect={state} />
                <main>
                    <Guide />
                    <Tour tourSelect={state} />

                    <GuideModal />
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
