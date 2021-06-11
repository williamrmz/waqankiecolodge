import React from "react";
import "../styles/styles.css";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import HeaderTour from "../components/tour/HeaderTour";
import Tour from "../components/tour/Tour";
import Guide from "../components/tour/guides/GuideCard";
import GuideModal from "../components/tour/guides/GuideModal";

const tour = ({ location }) => {
    if (location.state === null) {
        return (window.location = "/");
    }

    const rute = location?.state?.rute || "main";
    const title = location?.state?.title || "no title";

    return (
        <div className="container-fluid p-0">
            <Layout>
                <Seo />
                <HeaderTour title={title} />
                <main>
                    <Guide />
                    <Tour title={title} rute={rute} />
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
