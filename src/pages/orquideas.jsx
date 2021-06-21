import React from "react";
import "../styles/styles.css";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import GalleryOrquides from "../components/catalogues/GalleryOrquides";
import Seo from "../components/Seo";

const birds = () => {
    return (
        <div className="container-fluid p-0">
            <Layout>
                <Seo title={"Orquideas"} />
                <main>
                    <GalleryOrquides />
                </main>
            </Layout>
        </div>
    );
};

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: { ns: { in: ["orquideas"] }, language: { eq: $language } }) {
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
