import React from 'react';
import '../styles/styles.css';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HeaderTour from '../components/tour/HeaderTour';
import Tour from '../components/tour/itinerareo/TourMain';
import Guide from '../components/tour/guides/GuideCard';
import GuideModal from '../components/tour/guides/GuideModal';
import { StaticImage } from 'gatsby-plugin-image';

const tour = () => {
	return (
		<div className="container-fluid p-0">
			<Layout>
				<Seo />
				<HeaderTour titulo={'Northen Perú Itinerary'}>
					<StaticImage className="tourpage-image" src={'../images/tour_main.jpg'} alt="Main" placeholder="none" />
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
