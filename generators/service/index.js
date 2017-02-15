'use strict';

const YangGenerator = require('../yang-generator.js');
const path = require('path');
const chalk = require('chalk');
const yosay = require('yosay');
const rename = require("gulp-rename");
const _ = require("lodash");


module.exports = class extends YangGenerator
{
   constructor(args, opts) {
      super(args, opts);
   }


   initializing() {
      super.initializing();
      this.props['dir'] = this.options.dir || 'app/services';
   }

   writing () {
      super.writing();

      // Copy templates
      this.copyTemplates();
   }
};
