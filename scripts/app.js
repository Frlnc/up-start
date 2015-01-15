var frlnc = {};
window.frlnc = frlnc;

frlnc = (function () {
  var frlnc = {
    modules: {}
  };

  /**
   * Init the modules.
   */
  frlnc.init = function () {
    this.emit('init');
  };

  /**
   * Makes an object an emitter.
   *
   * @param object
   * @return object
   */
  frlnc.makeEmitter = function (object) {
    if (object === undefined) {
      object = {};
    } else if (object.prototype != null) { // jshint ignore:line
      object = object.prototype;
    }

    object._listeners = {};

    /**
     * Listen to an event.
     *
     * @param event
     * @param fn
     */
    object.on = function (event, fn) {
      if (this._listeners[event] == null) { // jshint ignore:line
        this._listeners[event] = [];
      }

      this._listeners[event].push(fn);
    };

    /**
     * Emit an event.
     * *
     * @param event
     */
    object.emit = function (event) {
      if (this._listeners[event] == null) { // jshint ignore:line
        return;
      }

      var args = Array.prototype.slice(arguments, 1);
      this._listeners[event].forEach(function (listener) {
        listener.apply(args);
      });
    };

    return object;
  };

  return frlnc.makeEmitter(frlnc);
})();
