var gulp = require('gulp');
var assets = require('./clean/assets');
var uploads = require('./clean/uploads');


gulp.task('clean:assets', assets);
gulp.task('clean:uploads', uploads);

gulp.task('clean', [
  'clean:assets',
  'clean:uploads'
]);
