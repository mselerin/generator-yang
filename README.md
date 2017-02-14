# generator-yang [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 

## Installation

First, install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
```

Then install the generator
```bash
git clone https://bitbucket.org/mselerin/generator-yang
cd generator-yang
npm install & npm link
```

Then generate your new project in another folder:

```bash
yo yang my-awesome-project
```


## Available subcommands

    yang:feature feature-name
Generates a complete feature under app/features.

***

    yang:service service-name
Generates a stub service under app/services.

***

    yang:component component-name
Generates a stub component under the current directory.


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
