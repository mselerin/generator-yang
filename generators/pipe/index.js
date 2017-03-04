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
      if (this.props.dir === 'app/shared/pipes') {
         this.insertBeforeNeedle(
            'app/shared/shared.module.ts',
            'yang-add-pipe-import',
            `import {${this.props.titleName}Pipe} from "./pipes/${this.props.kebabName}.pipe";`
         );

         this.insertBeforeNeedle(
            'app/shared/shared.module.ts',
            'yang-add-pipe-declaration',
            `${this.props.titleName}Pipe,`
         );
      }
   }
};
