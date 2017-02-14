const APP_VERSION = require("./package.json").version;
const BUILD_DATE = new Date();
const merge = require('webpack-merge');

const defaultConfig = {
    version: `${APP_VERSION}`,
    buildDate: `${BUILD_DATE.toISOString()}`,
    production: true,
    apiUrl: ``
};

module.exports = {
    dev: {
        clientConfig: merge(defaultConfig, {
            production: false,
            apiUrl: `http://localhost:8080/api/`
        })
    },

    test: {
        clientConfig: merge(defaultConfig, {
            production: true,
            apiUrl: `/api/`
        })
    },

    prod: {
        clientConfig: merge(defaultConfig, {
            production: true,
            apiUrl: `/api/`
        })
    }
};
