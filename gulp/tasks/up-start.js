var gulp = require('gulp');
var less = require('./up-start/less');
var sass = require('./up-start/sass');


gulp.task('up-start:less', less);
gulp.task('up-start:sass', sass);
