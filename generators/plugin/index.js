'use strict';

const Generator = require('yeoman-generator');
const _ = require("lodash");


module.exports = class extends Generator
{
   constructor(args, opts) {
      super(args, opts);
      this.argument('plugin', { type: String, required: true });
   }

   initializing() {
      let opt = _.merge({
         arguments: this.arguments
      }, this.options);

      this.composeWith(this.options['plugin'], opt);
   }
};
