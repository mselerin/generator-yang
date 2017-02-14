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
      this.argument('name', { type: String, required: true });

      this.option('dir', { type: String, required: false });

      // Default values
      this.props = {
         dir: this.options.dir,
         name: this.options.name,
         titleName: _.upperFirst(_.camelCase(this.options.name))
      };

      this.props.dir = this.props.dir || `app/services/`;
   }

   writing () {

      // Templated filename
      this.registerTransformStream(rename((path) => {
         path.basename = path.basename.replace(/(#name#)/g, this.props.name);
         path.dirname = path.dirname.replace(/(#name#)/g, this.props.name);
      }));

      // Copy templates
      this.fs.copyTpl(
         this.templatePath(),
         this.destinationPath(this.props.dir),
         this.props
      );

   }
};
