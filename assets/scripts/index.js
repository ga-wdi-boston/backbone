'use strict';

$(() => {
  // create router
  require('./router/index').start();

  // make links work
  require('./router/events').registerPaths();
});
