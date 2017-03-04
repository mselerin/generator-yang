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

      this.option('styles', { type: Boolean, required: false });
      this.option('shared', { type: Boolean, required: false });
   }


   initializing() {
      super.initializing();
      this.props['dir'] = this.options.dir || 'app/shared/pipes';
   }


   writing () {
      super.writing();

      // Copy templates
      this.copyTemplates();


      // Update files
      if (this.props.dir === 'app/shared/directives') {
         this.insertBeforeNeedle(
            'app/shared/shared.module.ts',
            'yang-add-directive-import',
            `import {${this.props.titleName}Directive} from "./directives/${this.props.kebabName}.directive";`
         );

         this.insertBeforeNeedle(
            'app/shared/shared.module.ts',
            'yang-add-directive-declaration',
            `${this.props.titleName}Directive,`
         );
      }
   }
};
