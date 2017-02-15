'use strict';

const YangGenerator = require('../yang-generator.js');
const chalk = require('chalk');
const yosay = require('yosay');
const rename = require("gulp-rename");
const _ = require("lodash");


module.exports = class extends YangGenerator
{
   constructor(args, opts) {
      super(args, opts);
      this.option('styles', { type: Boolean, required: false });
   }


   initializing() {
      super.initializing();
      this.props['dir'] = this.options.dir || `app/features/${this.props.name}`;
      this.props['styles'] = this.options.styles || false;
   }

   writing () {
      super.writing();

      this.composeWith(require.resolve('../component'), {
         arguments : [ this.props.name ],
         dir: this.props.dir,
         styles: this.props.styles
      });

      this.copyTemplates();
   }
};
