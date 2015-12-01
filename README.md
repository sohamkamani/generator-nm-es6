# generator-nm-es6
Yeoman generator for developing node modules in ES6.

## Installation and usage

- Install previous dependencies if you haven't already (```npm install -g yo gulp mocha```).
- Install the generator (```npm install -g generator-nm-es6```)
- Run the generator (```yo nm-es6```)

## Development Workflow

Your folder tree structure after running the generator and running gulp will look something like this:  
```
.  
├── .gitignore  
├── .jshintrc  
├── .travis.yml  
├── README.md  
├── build  
│   ├── source  
│   │   ├── index.js  
│   │   └── index.js.map  
│   └── test  
│       ├── index.spec.js  
│       └── index.spec.js.map  
├── dist  
│   └── index.js  
├── gulpfile.js  
├── index.js  
├── package.json  
├── source  
│   └── index.js  
└── test  
    └── index.spec.js
```
