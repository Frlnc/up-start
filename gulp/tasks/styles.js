var gulp = require('gulp');
var less = require('./styles/less');
var sass = require('./styles/sass');


gulp.task('styles:less', less);
gulp.task('styles:sass', sass);
