import React from "react";
import "../styles/styles.css";

import Header from "../components/header/Header";
import OurServices from "../components/ourservices/OurServices";
import OurRooms from "../components/ourrooms/OurRooms";
import Catalogue from "../components/ourcatalogues/OurCatalogues";
import PromocionalVideo from "../components/promocionalvideo/PromocionalVideo";
import OurTours from "../components/ourtours/OurTours";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const IndexPage = () => {
    return (
        <div className="container-fluid p-0">
            <Layout>
                <Seo title={"Waqanki"} />
                <Header />
                <main>
                    <OurServices />
                    <PromocionalVideo />
                    <OurRooms />
                    <Catalogue />
                    <OurTours />
                    {/* <Comments /> */}
                </main>
            </Layout>
        </div>
    );
};

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: { ns: { in: ["index"] }, language: { eq: $language } }) {
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

export default IndexPage;
