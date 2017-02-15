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
      this.option('dir', { type: String, required: false });

      this.props = {};
   }

   initializing() {
      this.props['dir'] = this.options.dir || '';
      this.props['name'] = _.kebabCase(this.options.name);
      this.props['titleName'] = _.upperFirst(_.camelCase(this.options.name));
   }


   writing() {
      // Templated filename
      this.registerTransformStream(rename((path) => {
         path.basename = path.basename.replace(/(#name#)/g, this.props.name);
         path.dirname = path.dirname.replace(/(#name#)/g, this.props.name);
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
