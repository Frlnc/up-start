var notify = require('gulp-notify');

module.exports = function () {
  notify.onError({
    title: 'Gulp Error',
    message: '<%= error.message %>'
  }).apply(this, arguments);

  this.emit('end');
};
