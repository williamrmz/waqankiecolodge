
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("C:\\Users\\Daniela\\Desktop\\waqanki\\waqankiecolodge\\src\\pages\\404.jsx")),
  "component---src-pages-aves-jsx": preferDefault(require("C:\\Users\\Daniela\\Desktop\\waqanki\\waqankiecolodge\\src\\pages\\aves.jsx")),
  "component---src-pages-contactpage-jsx": preferDefault(require("C:\\Users\\Daniela\\Desktop\\waqanki\\waqankiecolodge\\src\\pages\\contactpage.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("C:\\Users\\Daniela\\Desktop\\waqanki\\waqankiecolodge\\src\\pages\\index.jsx")),
  "component---src-pages-tour-jsx": preferDefault(require("C:\\Users\\Daniela\\Desktop\\waqanki\\waqankiecolodge\\src\\pages\\tour.jsx"))
}

