var gulp = require('gulp');
var copy = require('gulp-copy');
var config = require('../config').tasks.static;

gulp.task('static', function () {
  gulp.src(config.src)
    .pipe(copy(config.dest, {
      prefix: 1
    }));
});
