const PROFILE = process.env.PROFILE;
const rimraf = require('rimraf');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const distPath = path.resolve(webpackConfig.output.path); // webpack.output.path == PROFILE

console.log(`Building ${PROFILE.toUpperCase()}`);


console.log(` > Cleaning previous build in ${distPath}`);
rimraf.sync(distPath);

console.log(' > Webpacking...');
webpack(webpackConfig, function (err, stats) {
    if (err)
        throw err;

    console.log(stats.toString({
        colors: true,
        hash: false,
        version: false,
        assets: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }));

});
