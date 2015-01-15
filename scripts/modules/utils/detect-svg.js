/**
 * Adds a utility for detecting svg support.
 */
frlnc.modules.utils.addUtil(function () {
  var docEl = document.documentElement;

  if (!document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1')) {
    return;
  }

  docEl.className = docEl.className.replace('no-svg', 'svg');

  var images = document.getElementsByTagName('img');
  var regex = /.*\.svg$/i;
  for (var i = 0; i !== images.length; i++) {
    if (images[i].src.match(regex)) {
      images[i].src = images[i].src.slice(0, -3) + 'png';
    }
  }
});
