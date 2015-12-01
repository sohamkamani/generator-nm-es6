var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);
  },
  init: function () {
    var cb = this.async();
    var self = this;

    this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      default: this.appname.replace(/\s/g, '-'),
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
    }, {
      name: 'website',
      message: 'What is the URL of your website?',
      store: true
    }, {
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [{
        name: 'lodash',
        value: 'lodash',
        checked: false
      }, {
        name: 'request',
        value: 'request',
        checked: true
      }, {
        name: 'async',
        value: 'async',
        checked: true
      }]
    }], function (props) {
      console.log('PROPS', props);
      self.formProps = props;
      cb();
    });
  },
  writing: function () {
    var self = this;
    var mv = function (from, to) {
      self.fs.move(self.destinationPath(from), self.destinationPath(to));
    };
    self.fs.copyTpl(
      self.templatePath('**/*'),
      self.destinationPath('.'), {
        info: {
          githubUsername: self.formProps.githubUsername,
          moduleName: self.formProps.moduleName,
          name: self.user.git.name(),
          email: self.user.git.email(),
        }
      }
    );
    mv('travis.yml', '.travis.yml');
    mv('gitignore', '.gitignore');
    mv('jshintrc','.jshintrc');
  },
  gitInit: function () {
    this.spawnCommandSync('git', ['init']);
  },
  installDeps: function () {
    this.npmInstall(this.formProps.features, {save : 'true'});
    this.installDependencies({
      bower: false
    });
  }
});
