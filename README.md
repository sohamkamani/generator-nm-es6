# generator-nm-es6
Yeoman generator for developing your own node modules in ES6.
- Uses [mocha](https://mochajs.org/) to run tests.
- Uses [npm scripts](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) for workflow automation.
- Ready baked support for [TravisCI](https://travis-ci.org/) and [coveralls](https://coveralls.io/).

## Installation and usage

- Install previous dependencies if you haven't already (`npm install -g yo mocha`).
- Install the generator (`npm install -g generator-nm-es6`)
- Run the generator (`yo nm-es6`)

## Development Workflow

the folder tree structure after running the generator and running `npm run build` will look something like this:  
```
.  
├── .gitignore  
├── .jshintrc  
├── .travis.yml  
├── README.md   
├── dist  
│   └── index.js  
├── package.json  
├── source  
│   └── index.js  
└── test  
    └── index.spec.js

```

- Everything inside the source and test folder can be written in ES6. It will be automatically be transpiled and put into a temporary "build" directory.
- Source maps are in-built, which means that any error in the code will be reported as an error in the original code, and not as an error in the transpiled code.
- All the tests reside inside the test folder and will be run using mocha.

### npm scripts
- `npm test` - Run all tests and jshint. Also watches files for changes.
- `npm run test:cover` - Run tests and generate code coverage information.
- `npm run build` - Transpiles ES6 into build folder. Should be run before publishing the node module.

### source
The source folder is where *all* the source code files go. The `index.js` file inside this folder will be the entry point to the node module, i.e. the node module will export whatever source/index.js exports.

### test
The test folder contains all the tests for the source files. Tests are run using [mocha](https://mochajs.org/).

### dist
This is the actual folder the node module is run from once it is packaged and published. The `index.js` file here is the *actual* entry point of the node module. The dist folder exactly mimics the contents of the source folder, or the build/source folder.

## Publishing your node module
- Run `npm run build`
- Commit and push your code.
- Follow the instructions [here](https://gist.github.com/coolaj86/1318304)

## License

MIT © [sohamkamani](https://github.com/sohamkamani)
