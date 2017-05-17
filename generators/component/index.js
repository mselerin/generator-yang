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

      this.option('feature', { type: String, required: false});
      this.option('styles', { type: Boolean, required: false });
      this.option('shared', { type: Boolean, required: false });
   }


   initializing() {
      super.initializing();
      this.props['feature'] = this.options.feature || '';
      this.props['dir'] = this.options.dir;

      if (!this.props['dir'])
         this.props['dir'] = (this.options.shared ? 'app/shared/components' : '');

      if (!this.props['dir'])
         this.props['dir'] = (this.options.feature !== '' ? 'app/features/' + this.options.feature + '/' + this.props['name'] : '');

      this.props['styles'] = this.options.styles || false;
      this.props['shared'] = this.options.styles || false;
   }


   writing () {
      super.writing();

      // Copy templates
      this.fs.copyTpl(
         this.templatePath('#name#.component.ts'),
         this.destinationPath(path.join(this.props.dir, '#name#.component.ts')),
         this.props
      );

      this.fs.copyTpl(
         this.templatePath('#name#.component.html'),
         this.destinationPath(path.join(this.props.dir, '#name#.component.html')),
         this.props
      );

      if (this.props.styles) {
         this.fs.copyTpl(
            this.templatePath('#name#.component.scss'),
            this.destinationPath(path.join(this.props.dir, '#name#.component.scss')),
            this.props
         );
      }


      // Update files
      if (this.props.dir === 'app/shared/components') {
         this.insertBeforeNeedle(
            'app/shared/shared.module.ts',
            'yang-add-component-import',
            `import {${this.props.titleName}Component} from "./components/${this.props.kebabName}.component";`
         );

         this.insertBeforeNeedle(
            'app/shared/shared.module.ts',
            'yang-add-component-declaration',
            `${this.props.titleName}Component,`
         );
      }
   }
};
