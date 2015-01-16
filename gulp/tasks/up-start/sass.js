var gulp = require('gulp');
var copy = require('gulp-copy');
var config = require('../../config').tasks.styles.sass;

module.exports = function () {
  gulp.src('./gulp/tasks/up-start/sass/**/*.scss')
    .pipe(copy(config.dir, {
      prefix: 4
    }));
};
