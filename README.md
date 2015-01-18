Up Start
========

### ./back

Put your backend API / app here (such as: Laravel).

### ./public

Put your public files here (such as: `index.php`).

### ./styles

Put your styles here, supported types are:
  * .scss
  * .sass
  * .less

### ./scripts

Put your scripts in here (such as: `app.js`).

### Commands

  * `gulp clean` => `[ 'gulp clean:assets', 'gulp clean:uploads' ]`
    * `clean:assets` will remove the dest assets folder.
    * `clean:uploads` will remove the dest uploads folder.
  * `gulp scripts` will compile and concat the scripts.
  * `gulp styles`
    * `gulp styles:sass` will compile and concat the sass styles.
    * `gulp styles:less` will compile and concat the less styles.
  * `gulp up-start`
    * `gulp up-start:sass` will scaffold a sass setup.
    * `gulp up-start:less` will scaffold a less setup.
  * `gulp watch` Runs `gulp.watch` to allow for watching files as they're edited and fire off the appropriate gulp tasks to compile them. This also runs a livereload server.
  
### Contributing

We're always looking for people to help out with our projects, if you wish to help then you may make pull requests

### Credits

Up-Start is a project by Frlnc but it's made possible by so many sources that the list would be too large to type.

The major sources are:
  * [Big Bite Creative](https://github.com/bigbitecreative/base)
  * [Sass](http://sass-lang.com)
  * [Less](http://lesscss.org)
  * [Gulp](http://gulpjs.com/)
  * [Node](http://nodejs.org)
