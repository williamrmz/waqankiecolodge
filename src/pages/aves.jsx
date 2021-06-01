import React from "react";
import "../styles/styles.css";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GalleryBirds from "../components/catalogues/GalleryBirds";
import Seo from "../components/Seo";

const birds = () => {
    return (
        <div className="container-fluid p-0">
            <Layout>
                <Seo title={"Aves"} />
                <main>
                    <GalleryBirds />
                </main>
            </Layout>
        </div>
    );
};

export const query = graphql`
    query($language: String!) {
        locales: allLocale(
            filter: { ns: { in: ["aves"] }, language: { eq: $language } }
        ) {
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

export default birds;
