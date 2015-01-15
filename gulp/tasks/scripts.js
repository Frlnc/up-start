var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var errorHandler = require('../error-handler');
var wrapper = require('gulp-wrapper');
var config = require('../config').tasks.scripts;


gulp.task('scripts', function () {
  gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish))
    .pipe(concat(config.concat))
    .pipe(uglify())
      .on('error', errorHandler)
    .pipe(wrapper(config.wrapper))
    .pipe(gulp.dest(config.dest));
});
