const path = require(`path`);
const { languages, defaultLanguage } = require("./languages");

module.exports = {
    pathPrefix: "/waqankiecolodge",
    siteMetadata: {
        title: "WAQANKI ECO LODGE",
        description: `Mas de 250 especies de orquídeas, plantas ornamentales, mirador para la observación de
    colibrís, senderos de observación de aves, mariposas, anfibios y la ruta del café.`,
        siteUrl: "https://kind-lichterman-5edcb4.netlify.app",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sass",
        "gatsby-transformer-sharp",
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
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
            resolve: "gatsby-source-filesystem",
            options: {
                name: "aves",
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
                    defaultNS: "common",
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
                        matchPath: "/ignored-page",
                        // languages: ["es"],
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                exclude: ["/**/404", "/**/404.html"],
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
                            { lang: "x-default", url },
                        ];
                        languages.forEach((lang) => {
                            if (lang === defaultLanguage) return;
                            links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` });
                        });
                        return {
                            url,
                            changefreq: "daily",
                            priority: originalPath === "/" ? 1.0 : 0.7,
                            links,
                        };
                    });
                },
            },
        },
    ],
};
