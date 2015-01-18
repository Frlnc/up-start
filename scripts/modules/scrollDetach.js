/**
 * A simple scroll detach module.
 *
 * @type {frlnc.modules.scrollDetach}
 */
frlnc.modules.scrollDetach = frlnc.makeEmitter();

(function () {
  'use strict';

  /**
   * Inits the utilities.
   */
  this.init = function () {
    this.emit('pre-init');

    document.onscroll = this.onscroll.bind(this);

    this.emit('post-init');
  };

  /**
   * On scroll listener.
   */
  this.onscroll = function () {
    var detached = window.pageYOffset > 0;

    if (detached) {
      this.emit('detached');
    } else {
      this.emit('attached');
    }

    this.toggle(detached);
  };

  /**
   * Toggles the state.
   *
   * @param detached
   */
  this.toggle = function (detached) {
    var docEl = document.documentElement;
    var detachables = docEl.querySelectorAll('[data-detachable="true"]');
    var i;

    for (i = 0; i < detachables.length; i++) {
      detachables[i].dataset.detached = detached && 'true' || 'false';
    }
  };

}.bind(frlnc.modules.scrollDetach))();

/**
 * Init with frlnc's main module.
 */
frlnc.on('init', function () {
  frlnc.modules.scrollDetach.init();
});
