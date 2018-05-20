
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = (config, env) => {                                                                             

    // adds support for css modules 
    config = rewireCssModules(config, env);

    return config;
}