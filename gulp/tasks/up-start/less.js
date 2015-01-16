var gulp = require('gulp');
var copy = require('gulp-copy');
var config = require('../../config').tasks.styles.less;

module.exports = function () {
  gulp.src('./gulp/tasks/up-start/less/**/*.less')
    .pipe(copy(config.dir, {
      prefix: 4
    }));
};
