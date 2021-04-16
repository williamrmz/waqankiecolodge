// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-jsx": () => import("./../../../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-aves-jsx": () => import("./../../../src/pages/aves.jsx" /* webpackChunkName: "component---src-pages-aves-jsx" */),
  "component---src-pages-contactpage-jsx": () => import("./../../../src/pages/contactpage.jsx" /* webpackChunkName: "component---src-pages-contactpage-jsx" */),
  "component---src-pages-index-jsx": () => import("./../../../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-tour-jsx": () => import("./../../../src/pages/tour.jsx" /* webpackChunkName: "component---src-pages-tour-jsx" */)
}

