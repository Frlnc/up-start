var gulp = require('gulp');
var livereload = require('gulp-livereload');
var errorHandler = require('../error-handler');
var _config = require('../config');
var config = _config.tasks.watch;


gulp.task('watch', function () {
  livereload.listen();

  gulp.watch(_config.dest + '/**/*.{css,js,php,html,twig,jpg,jpeg,png,svg,gif}', livereload.changed)
    .on('error', errorHandler);

  Object.getOwnPropertyNames(config).forEach(function (key) {
    gulp.watch(config[key], [key])
      .on('error', errorHandler);
  });
});
