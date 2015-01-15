var gulp = require('gulp');
var sass = require('gulp-sass');
var errorHandler = require('../../error-handler');
var prefix = require('gulp-autoprefixer');
var wrapper = require('gulp-wrapper');
var config = require('../../config').tasks.styles.sass;

module.exports = function () {
  gulp.src(config.src)
    .pipe(sass({
      outputStyle: 'compressed',
      precision: 6
    }))
    .on('error', errorHandler)
    .pipe(prefix('last 2 version', '> 1%'))
    .pipe(wrapper(config.wrapper))
    .pipe(gulp.dest(config.dest));
};
