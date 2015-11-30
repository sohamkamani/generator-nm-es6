'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var dirs = {
  source: 'source',
  dist: 'build',
  sourceRoot: path.join(__dirname, 'source'),
  testRoot: path.join(__dirname, 'test')
 };

var files = {
  test: 'test/**/*.js',
  testBuild: dirs.testBuild + '/**/*.js',
  source: dirs.source + '/**/*.js',
  sourceBuild: dirs.sourceBuild + '/**/*.js',
  entryPoint: dirs.sourceBuild + '/index.js'
};

//Test tasks
gulp.task('source:build', function () {
  return gulp.src(files.source)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.', // (C)
      {
        sourceRoot: dirs.sourceRoot
      }))
    .pipe(gulp.dest('build/source'));
});

gulp.task('test:build', function () {
  return gulp.src(files.test)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.', // (C)
      {
        sourceRoot: dirs.testRoot
      }))
    .pipe(gulp.dest('build/test'));
});

gulp.task('build:all', ['source:build', 'test:build']);


gulp.task('test', ['build:all'], function () {
  return gulp.src('build/test/**/*.js', {
      read: false
    })
    .pipe(mocha());
});

gulp.task('clean:all', function () {
  return gulp.src('build', {
      read: false
    })
    .pipe(clean());
});

gulp.task('build', function(){
  return gulp.src(files.source)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch([files.test, files.source], ['test']);
});

gulp.task('default', ['clean:all'], function () {
  return gulp.start.apply(this, ['test', 'watch']);
});
