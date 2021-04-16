import React from "react";
import "../styles/styles.css";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../components/bird/Gallery";

const birds = () => {
    return (
        <div className="container-fluid p-0">
            <Layout>
                <main>
                    <Gallery />
                </main>
            </Layout>
        </div>
    );
};

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: { ns: { in: ["aves"] }, language: { eq: $language } }) {
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
