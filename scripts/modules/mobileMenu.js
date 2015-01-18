/**
 * A simple mobile menu module.
 *
 * @type {frlnc.modules.mobileMenu}
 */
frlnc.modules.mobileMenu = frlnc.makeEmitter();

(function () {
  'use strict';

  var menuEl = null;
  var mobileNav = null;

  /**
   * Inits the utilities.
   */
  this.init = function () {
    this.emit('pre-init');

    var docEl = window.document.documentElement;
    menuEl = docEl.querySelector('#mobile-menu-toggle');
    mobileNav = docEl.querySelector('#mobile-nav');

    menuEl.onclick = this.toggle.bind(this);
    mobileNav.onclick = this.toggle.bind(this);
    
    this.emit('post-init');
  };

  /**
   * Toggles the mobile menu.
   */
  this.toggle = function (e) {
    if (mobileNav.dataset.show === 'true') {
      var to = e.toElement;

      if (to !== mobileNav && to.dataset.hide !== 'true') {
        return;
      }
    }

    mobileNav.dataset.show = mobileNav.dataset.show !== 'true';
  };

}.bind(frlnc.modules.mobileMenu))();

/**
 * Init with frlnc's main module.
 */
frlnc.on('init', function () {
  frlnc.modules.mobileMenu.init();
});
