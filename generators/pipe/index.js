'use strict';

const YangGenerator = require('../yang-generator.js');


module.exports = class extends YangGenerator
{
   constructor(args, opts) {
      super(args, opts);

      this.option('styles', { type: Boolean, required: false });
      this.option('shared', { type: Boolean, required: false });
   }


   initializing() {
      super.initializing();
      this.props['shared'] = (!this.options.dir);
      this.props['dir'] = this.options.dir || `${this.getProjectRoot()}app/shared/pipes`;
   }


   writing () {
      super.writing();

      // Copy templates
      this.copyTemplates();


      // Update files
      if (this.props.shared) {
         this.insertBeforeNeedle(
            `${this.getProjectRoot()}app/shared/shared.module.ts`,
            'yang-add-pipe-import',
            `import {${this.props.titleName}Pipe} from "./pipes/${this.props.kebabName}.pipe";`
         );

         this.insertBeforeNeedle(
            `${this.getProjectRoot()}app/shared/shared.module.ts`,
            'yang-add-pipe-declaration',
            `${this.props.titleName}Pipe,`
         );
      }
   }
};
