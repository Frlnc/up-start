var gulp = require('gulp');
var less = require('gulp-less');
var CleanCSS = require('less-plugin-clean-css');
var errorHandler = require('../../error-handler');
var prefix = require('gulp-autoprefixer');
var wrapper = require('gulp-wrapper');

var config = require('../../config').tasks.styles.less;

module.exports = function () {
  gulp.src(config.src)
    .pipe(less({
      plugins: [new CleanCSS({ advanced: true })]
    }))
    .on('error', errorHandler)
    .pipe(prefix('last 2 version', '> 1%'))
    .pipe(wrapper(config.wrapper))
    .pipe(gulp.dest(config.dest));
};
