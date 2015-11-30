var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);
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
			name: 'cli',
			message: 'Do you need a CLI?',
			type: 'confirm',
			default: false
		}], console.log);
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('public/index.js'), {
        someJs: 'Templating with Yeoman'
      }
    );
  },
  gitInit: function () {
    this.spawnCommandSync('git', ['init']);
  },
  installDeps: function () {
    this.installDependencies({
      bower: false
    });
  }
});
