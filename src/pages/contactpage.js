import React from 'react'
import {graphql} from 'gatsby';
import {Link, useTranslation, useI18next} from 'gatsby-plugin-react-i18next';

const Contactpage = () => {
    const {t} = useTranslation();
    const {languages, originalPath} = useI18next();
    return (
        <div>
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} language={lng}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
                    <h2 style={{fontWeight: 'bolder'}}>{t('Inicio')}<strong>SERVICIOS</strong></h2>
        </div>
    )
}

export default Contactpage;


export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {ns: {in: ["navbar"]}, language: {eq: $language}}) {
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