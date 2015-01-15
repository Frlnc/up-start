var requireDir = require('require-dir');


/**
 * The tasks object.
 */
var tasks = {};

tasks.load = function (directory) {
  requireDir(directory || './tasks');
};


module.exports = tasks;
