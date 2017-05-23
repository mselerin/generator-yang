# generator-yang
> An Angular generator with Webpack

## Installation

First, install [Yeoman](http://yeoman.io) and Yang using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-yang
```

Then generate your new project in another folder:

```bash
yo yang my-awesome-project
```

That's all !


## Commands
### Service
    yo yang:service my-cool-service
Generates a stub service under app/services.


***
### Feature
    yo yang:feature my-super-feature
Generates a complete feature under app/features.

##### Options
* styles : Add a `name.component.scss`


***
### Component
    yo yang:component my-nice-component
Generates a stub component under the current directory.

    yo yang:component my-shared-component --shared
Generates a stub component under `app/shared/components`.

    yo yang:component my-feature-component --feature my-super-feature
Generates a stub component under `app/features/my-super-feature/my-feature-component`.

##### Options
* styles : Add a `name.component.scss`


***
### Plugin
    yo yang:plugin plugin-name
Execute a sub-generator for Yang.
For example, `yo yang:plugin sample` run then plugin named 'yang-sample' (which should be installed globally). 


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Michel Selerin]()


[npm-image]: https://badge.fury.io/js/generator-yang.svg
[npm-url]: https://npmjs.org/package/generator-yang
[travis-image]: https://travis-ci.org/mselerin/generator-yang.svg?branch=master
[travis-url]: https://travis-ci.org/mselerin/generator-yang
[daviddm-image]: https://david-dm.org/mselerin/generator-yang.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mselerin/generator-yang
