'use strict';

const YangGenerator = require('../yang-generator.js');


module.exports = class extends YangGenerator
{
   constructor(args, opts) {
      super(args, opts);
      this.option('component', { type: Boolean, required: false });
      this.option('styles', { type: Boolean, required: false });
   }


   initializing() {
      super.initializing();
      this.props['dir'] = this.options.dir || `${this.getProjectRoot()}app/features/${this.props.kebabName}`;
      this.props['component'] = this.options.component || true;
      this.props['styles'] = this.options.styles || false;
   }

   writing () {
      super.writing();

      if (this.props.component) {
         this.composeWith(require.resolve('../component'), {
            arguments: [this.props.name],
            dir: this.props.dir,
            styles: this.props.styles
         });
      }

      this.copyTemplates();

      // Update app/features/feature.module.ts
      this.insertBeforeNeedle(
         `${this.getProjectRoot()}app/features/features.module.ts`,
         'yang-add-feature-import',
         `import {${this.props.titleName}Module} from "./${this.props.kebabName}/${this.props.kebabName}.module";`
      );

      this.insertBeforeNeedle(
         `${this.getProjectRoot()}app/features/features.module.ts`,
         'yang-add-feature-module',
         `${this.props.titleName}Module,`
      );
   }
};
