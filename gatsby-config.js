const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: "WAQANKI ECO LODGE",
        description: `Mas de 250 especies de orquídeas, plantas ornamentales, mirador para la observación de
    colibrís, senderos de observación de aves, mariposas, anfibios y la ruta del café.`,
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
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "services",
                path: path.join(__dirname, `src`, `services`),
            },
            __key: "services",
        },
    ],
};
