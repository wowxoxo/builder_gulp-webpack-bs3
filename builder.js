"use strict";
const path = {
  src: {
    sass: "app/src/sass/",
    node: "node_modules/"
  }
};

module.exports.scriptsLibs = [
  // path.src.node + '/es5-shim/es5-shim.min.js', // example for ie
  path.src.node + "/jquery/dist/jquery.js",
  path.src.sass + "/compiled/b3/dist/bootstrap.js" // для бутстрапа перед ним надо подключить jquery!
];

module.exports.stylesLibs = [
  path.src.sass + "/compiled/b3/dist/bootstrap.css"
  // path.src.node + '/test/dist/test.css',
];
