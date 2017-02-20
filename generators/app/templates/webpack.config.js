const APP_VERSION = require("./package.json").version;
const PROFILE = process.env.PROFILE || 'dev';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const profileConfig = require('./env-config')[PROFILE];


const PATHS = { };
PATHS.root         = path.join(__dirname, './');
PATHS.dist         = path.join(PATHS.root, `dist/${PROFILE}`);
PATHS.node_modules = path.join(PATHS.root, 'node_modules');
PATHS.app          = path.join(PATHS.root, 'app');
PATHS.resources    = path.join(PATHS.app, 'resources');
PATHS.core         = path.join(PATHS.app, 'core');


const baseOutputName = `[name]-${APP_VERSION}`;
const extractCSS = new ExtractTextPlugin({
   filename: `${baseOutputName}.css`
});


const baseConfig = {
   devtool: false,

   entry: {
      'main': path.join(PATHS.app, 'main.ts')
   },


   output: {
      path: PATHS.dist,
      publicPath: '/',
      filename: `${baseOutputName}.js`
   },


   resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.js'],
      alias: {
         'app': PATHS.app,
         'resources': PATHS.resources,
         'core': PATHS.core
      }
   },


   module: {
      rules: [
         {
            test: /\.ts$/,
            loaders: ['ts-loader', 'angular2-template-loader'],
            exclude: [/\.(spec|e2e)\.ts$/]
         },

         {
            test: /\.s?css$/,
            loader: extractCSS.extract({
               fallback: 'style-loader',
               use: ['css-loader', 'sass-loader']
            }),
            exclude: [/\.component\.s?css$/]
         },

         {
            test: /\.s?css$/,
            loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
            include: [/\.component\.s?css$/]
         },

         { test: /\.json/, loader: 'json-loader' },
         { test: /\.html$/, loader: 'html-loader' },

         {
            test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'file-loader',
            query: {
               name: `[path][name].[ext]`
            }
         }
      ]
   },

   plugins: [
      // Permet de séparer le code applicatif des librairies externes
      new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor',
         minChunks: (module) => {
            const userRequest = module.userRequest;
            return (userRequest && userRequest.indexOf(PATHS.node_modules) >= 0);
         }
      }),

      new webpack.NoEmitOnErrorsPlugin(),

      new webpack.DefinePlugin({
         ENV_CONFIG: JSON.stringify(profileConfig.clientConfig)
      }),

      new webpack.ProvidePlugin({
         $: 'jquery', jquery: 'jquery', jQuery: 'jquery', 'window.jQuery' : 'jquery'
      }),

      extractCSS,

      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: 'app/index.html',
         favicon: 'app/favicon.png',
         inject: true,
         minify: false
      }),

      // Recopier tout sauf ce qui est déjà pris en compte
      new CopyWebpackPlugin([
         {
            from: 'app',
            to: 'app',
            ignore: ['*.ts', '*.scss', '*.css', '*.html']
         }
      ])
   ],

   stats: {
      colors: true,
      hash: false,
      version: false,
      assets: true,
      cached: false,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      reasons: false,
      source: false
   }

};


let config = merge(baseConfig, {});

if ('dev' === PROFILE) {
   config = merge(config, {
      devtool: 'cheap-module-eval-source-map',

      devServer: {
         port: 3000,
         inline: false,
         hot: false,
         stats: config.stats
      }
   });
}

else {
   config = merge(config, {
      plugins: [
         new webpack.optimize.UglifyJsPlugin({
            comments: false,
            beautify: false,
            sourceMap: false,
            mangle: {
               screw_ie8: true,
               keep_fnames: true
            },
            compress: {
               screw_ie8: true,
               warnings: false
            }
         }),

         new CleanWebpackPlugin([PATHS.dist])
      ]
   });
}

module.exports = config;
