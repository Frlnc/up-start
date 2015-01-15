/**
 * A simple util loading module.
 *
 * @type {frlnc.modules.utils}
 */
frlnc.modules.utils = frlnc.makeEmitter();

/**
 * A simple utility loader module.
 */
(function () {

  var _utils = [];

  /**
   * Adds a util.
   *
   * @param util
   */
  this.addUtil = function (util) {
    _utils.push(util);

    this.emit('util.added', util);
  };

  /**
   * Inits the utilities.
   */
  this.init = function () {
    this.emit('pre-init');

    _utils.forEach(function (util) {
      if (typeof util === 'function') {
        util();
      } else if (typeof util.init === 'function') {
        util.init();
      }
    });

    this.emit('post-init');
  };

}.bind(frlnc.modules.utils))();

/**
 * Init with frlnc's main module.
 */
frlnc.on('init', function () {
  frlnc.modules.utils.init();
});
