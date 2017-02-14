'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const rename = require("gulp-rename");


module.exports = class extends Generator
{
   constructor(args, opts) {
      super(args, opts);
      this.argument('name', { type: String, required: false });

      // Default values
      this.props = {
         name: this.options.name,
         description: this.options.name,
         authorName: this.user.git.name(),
         authorEmail: this.user.git.email(),
         authorUrl: ''
      };
   }


   prompting () {
      // Have Yeoman greet the user.
      this.log(yosay(
         'Welcome to the transcendent ' + chalk.blue('YANG') + ' generator!'
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
         // To access props later use this.props.someAnswer;
         this.props = props;
      }.bind(this));
   }


   writing () {

      // Templated filename
      this.registerTransformStream(rename((path) => {
         path.basename = path.basename.replace(/(#name#)/g, this.props.name);
         path.dirname = path.dirname.replace(/(#name#)/g, this.props.name);
      }));


      // Copy all files
      this.fs.copy(
         this.templatePath(),
         this.destinationPath(this.props.name),
         {
            globOptions: {
               dot: true
            }
         }
      );


      // Overwrite with templated files (json, js, html, css, scss)
      this.fs.copyTpl(
         this.templatePath('**/*.{json,js,ts,html,css,scss}'),
         this.destinationPath(this.props.name),
         this.props
      );

   }


   // install () {
   //    this.installDependencies();
   // }
};
