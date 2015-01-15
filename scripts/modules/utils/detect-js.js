/**
 * Adds a utility for detecting js support.
 */
frlnc.modules.utils.addUtil(function () {
  var docEl = document.documentElement;

  docEl.className = docEl.className.replace('no-js', 'js');
});
