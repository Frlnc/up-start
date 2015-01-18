var now = new Date();


/**
 * The base configuration.
 */
var config = {

  // The root src directory
  src: './',

  // The root dest directory
  dest: 'public/',

  // The assets directory
  assets: 'public/assets/',

  // The uploads directory
  uploads: 'public/uploads/',

  // The file wrapper
  wrapper: {

    // The file wrapper header

    header: '/** Made with <3 by Frlnc, ' + now.getFullYear() + ' || Generated at ' + now.toString() + ' */\r\n'

  },

  // The task configurations
  tasks: {}

};

/**
 * The scripts configuration.
 */
config.tasks.scripts = {

  // The scripts src directory
  src: config.src + 'scripts/**/*.js',

  // The scripts dest directory
  dest: config.assets + 'scripts/',

  // The scripts concat file name
  concat: 'app.js',

  // The scripts wrapper
  wrapper: config.wrapper

};

/**
 * The styles configuration.
 */
config.tasks.styles = {

  // less configuration
  less: {

    // the root less src directory
    dir: config.src + 'styles/',

    // The less src directory
    src: config.src + 'styles/app.less',

    // The less dest directory
    dest: config.assets + 'styles/',

    // The less wrapper
    wrapper: config.wrapper

  },

  // sass configuration
  sass: {

    // the root sass src directory
    dir: config.src + 'styles/',

    // The sass src directory
    src: [ config.src + 'styles/app.scss', config.src + 'styles/app.sass' ],

    // The sass dest directory
    dest: config.assets + 'styles/',

    // The sass wrapper
    wrapper: config.wrapper

  }

};

/**
 * The static configuration.
 */
config.tasks.static = {

  // The sass src directory
  src: config.src + 'static/**/*',

  // The sass dest directory
  dest: config.assets

};

/**
 * The watch configuration.
 */
config.tasks.watch = {

  'scripts': config.tasks.scripts.src,

  'styles:less': config.src + 'styles/**/*.less',

  'styles:sass': [ config.src + 'styles/**/*.scss', config.src + 'styles/**/*.sass' ],

  'static': config.tasks.static.src

};


module.exports = config;
