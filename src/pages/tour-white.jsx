import React from 'react';
import '../styles/styles.css';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeaderTour from '../components/tour/HeaderTour';
import Tour from '../components/tour/itinerareo/TourWhite';
import Guide from '../components/tour/guides/GuideCard';
import GuideModal from '../components/tour/guides/GuideModal';
import { StaticImage } from 'gatsby-plugin-image';

const tour = () => {
	return (
		<div className="container-fluid p-0">
			<Layout>
				<Seo />
				<HeaderTour titulo={'White-Masked Antbird'}>
					<StaticImage className="tourpage-image" src={'../images/tour_white.jpg'} alt="White" placeholder="none" />
				</HeaderTour>
				<main>
					<Guide />
					<Tour />
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
