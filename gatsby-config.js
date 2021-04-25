const path = require(`path`);
const { languages, defaultLanguage } = require('./languages');

module.exports = {
	pathPrefix: '/waqankiecolodge',
	siteMetadata: {
		title: 'WAQANKI ECO LODGE',
		description: `Hotel Ecolodge Waqanki. Ofrece servicios de guiado para avistamiento de aves y reservorio de orquídeas, además, puedes conocer distintos
                      puntos turísticos.`,
		siteUrl: 'https://github.com/williamrmz',
		author: `@William_RMz`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		// 'gatsby-plugin-sass',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				once: false, // Defines if animation needs to be launched once
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, `src`, `images`),
				// path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				// path: `${__dirname}/locales`,
				path: path.join(__dirname, `locales`),
				name: `locale`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'aves',
				path: path.join(__dirname, `src`, `aves`),
				// path: `${__dirname}/src/aves`,
			},
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				languages,
				defaultLanguage,
				i18nextOptions: {
					defaultNS: 'common',
					//debug: true,
					lowerCaseLng: true,
					saveMissing: false,
					interpolation: {
						escapeValue: false, // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false,
				},
				pages: [
					{
						matchPath: '/ignored-page',
						// languages: ["es"],
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-sitemap',
			options: {
				exclude: ['/**/404', '/**/404.html'],
				query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
                  edges {
                    node {
                      context {
                        i18n {
                          defaultLanguage
                          languages
                          originalPath
                        }
                      }
                      path
                    }
                  }
                }
              }
            `,
				serialize: ({ site, allSitePage }) => {
					return allSitePage.edges.map((edge) => {
						const { languages, originalPath, defaultLanguage } = edge.node.context.i18n;
						const { siteUrl } = site.siteMetadata;
						const url = siteUrl + originalPath;
						const links = [
							{ lang: defaultLanguage, url },
							{ lang: 'x-default', url },
						];
						languages.forEach((lang) => {
							if (lang === defaultLanguage) return;
							links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
						});
						return {
							url,
							changefreq: 'daily',
							priority: originalPath === '/' ? 1.0 : 0.7,
							links,
						};
					});
				},
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://williamrmz.github.io/waqankiecolodge/`,
				stripQueryString: true,
			},
		},
	],
};
