'use strict';

const YangGenerator = require('../yang-generator.js');


module.exports = class extends YangGenerator
{
   constructor(args, opts) {
      super(args, opts);
   }


   initializing() {
      super.initializing();
      this.props['dir'] = this.options.dir || `${this.getProjectRoot()}app/services`;
   }

   writing () {
      super.writing();

      // Copy templates
      this.copyTemplates();

      // Update files
      this.insertBeforeNeedle(
         `${this.getProjectRoot()}app/core.module.ts`,
         'yang-add-service-import',
         `import {${this.props.titleName}Service} from "app/services/${this.props.kebabName}.service";`
      );

      this.insertBeforeNeedle(
         `${this.getProjectRoot()}app/core.module.ts`,
         'yang-add-service-provider',
         `${this.props.titleName}Service,`
      );
   }
};
