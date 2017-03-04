'use strict';

const Generator = require('yeoman-generator');
const path = require('path');
const chalk = require('chalk');
const yosay = require('yosay');
const rename = require("gulp-rename");
const _ = require("lodash");


module.exports = class extends Generator
{
   constructor(args, opts) {
      super(args, opts);

      this.argument('name', { type: String, required: false });

      this.option('dir', {
         desc: "The directory where the code will be",
         type: String,
         required: false
      });

      this.option('skip-prompt', {
         desc: "Don't ask anything, use the default",
         type: Boolean,
         required: false,
         default: false
      });

      this.props = {};
   }


   getVersion() {
      return require('../package.json').version;
   }


   initializing() {
      this.props['dir'] = this.options.dir || '';
      this.props['name'] = this.options.name;
      this.props['kebabName'] = _.kebabCase(this.options.name);
      this.props['titleName'] = _.upperFirst(_.camelCase(this.options.name));
   }

   configuring() {
   }


   writing() {
      // Templated filename
      this.registerTransformStream(rename((path) => {
         path.basename = path.basename.replace(/(#name#)/g, this.props.kebabName);
         path.dirname = path.dirname.replace(/(#name#)/g, this.props.kebabName);
      }));
   }


   copyTemplates() {
      // Copy all files
      this.fs.copy(
         this.templatePath(),
         this.destinationPath(this.props.dir),
         {
            globOptions: {
               dot: true
            }
         }
      );

      // Overwrite with templated files (json, js, html, css, scss)
      this.fs.copyTpl(
         this.templatePath('**/*.{json,js,ts,html,css,scss}'),
         this.destinationPath(this.props.dir),
         this.props
      );
   }

};
