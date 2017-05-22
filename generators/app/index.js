'use strict';

const YangGenerator = require('../yang-generator.js');
const chalk = require('chalk');
const yosay = require('yosay');
const rename = require("gulp-rename");
const _ = require("lodash");
const path = require("path");


module.exports = class extends YangGenerator
{
   constructor(args, opts) {
      super(args, opts);
   }


   initializing() {
      super.initializing();
      this.props['name'] = this.options.name || path.basename(process.cwd());
      this.props['description'] = this.props.name;
      this.props['authorName'] = this.user.git.name();
      this.props['authorEmail'] = this.user.git.email();
      this.props['authorUrl'] = '';
   }


   prompting () {
      if (this.options['skip-prompt'] === true) {
         return;
      }

      // Have Yeoman greet the user.
      this.log(yosay(
         'Welcome to the transcendent '
         + chalk.blue('YANG')
         + ' ' + chalk.green(this.getVersion())
         + ' generator!'
      ));

      let prompts = [
         {
            type    : 'input',
            name    : 'name',
            message : 'Your project name',
            default : this.props.name
         },

         {
            type    : 'input',
            name    : 'description',
            message : 'Your project description',
            default : this.props.description
         },

         {
            type    : 'input',
            name    : 'authorName',
            message : 'Author\'s Name',
            default : this.props.authorName
         },

         {
            type    : 'input',
            name    : 'authorEmail',
            message : 'Author\'s Email',
            default : this.props.authorEmail
         },

         {
            type    : 'input',
            name    : 'authorUrl',
            message : 'Author\'s Homepage',
            default : this.props.authorUrl
         }
      ];

      return this.prompt(prompts).then(function (props) {
         _.merge(this.props, props);
      }.bind(this));
   }


   configuring() {
      super.configuring();
      this.props['dir'] = this.options.dir || '.';
   }


   writing () {
      super.writing();
      this.copyTemplates();
   }
};
