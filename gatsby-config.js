module.exports = {
    siteMetadata: {
        title: "waqankiecolodge",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
            __key: "images",
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `locales`,
                path: `${__dirname}/src/locales`,
            },
            __key: "locales",
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locales`, // name given to `gatsby-source-filesystem` plugin.
                languages: [`es`, `en`],
                defaultLanguage: `es`,
                // if you are using Helmet, you must include siteUrl, and make sure you add http:https
                // siteUrl: `https://example.com/`,
                // you can pass any i18next options
                // pass following options to allow message content as a key
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false, // not needed for react as it escapes by default
                    },
                    keySeparator: false,
                    nsSeparator: false,
                },
                pages: [
                    {
                        matchPath: "/",
                        languages: ["es"],
                    },
                ],
            },
        },
    ],
};
