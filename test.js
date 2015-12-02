var path = require('path');

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('generator-nm-es6', function () {

  before(function (done) {
    helpers.run(path.join(__dirname, 'app'))
      .withPrompts({
      })
      .on('ready', function (generator) {
        // This is called right before `generator.run()` is called
      })
      .on('end', done);
  });

  it('Renames and puts dot files', function(){
    assert.file(['.gitignore', 'gulpfile.js', '.jshintrc', 'README.md', '.travis.yml', 'package.json']);
  });

  it('initializes git repo', function(){
    assert.file('.git');
  });

  it('copies source and test folders with files', function(){
    assert.file([
      'source',
      'test',
      'source/index.js',
      'test/index.spec.js'
    ]);
  });
});
