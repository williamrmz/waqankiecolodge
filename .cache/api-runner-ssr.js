var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('D:/Resources/waqankiecolodge/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-react-i18next',
      plugin: require('D:/Resources/waqankiecolodge/node_modules/gatsby-plugin-react-i18next/gatsby-ssr'),
      options: {"plugins":[],"languages":["es","en"],"defaultLanguage":"es","i18nextOptions":{"defaultNS":"common","lowerCaseLng":true,"saveMissing":false,"interpolation":{"escapeValue":false},"keySeparator":false,"nsSeparator":false},"pages":[{"matchPath":"/ignored-page"}]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('D:/Resources/waqankiecolodge/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"exclude":["/**/404","/**/404.html"],"query":"\n              {\n                site {\n                  siteMetadata {\n                    siteUrl\n                  }\n                }\n                allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {\n                  edges {\n                    node {\n                      context {\n                        i18n {\n                          defaultLanguage\n                          languages\n                          originalPath\n                        }\n                      }\n                      path\n                    }\n                  }\n                }\n              }\n            ","output":"/sitemap.xml","createLinkInHead":true},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
