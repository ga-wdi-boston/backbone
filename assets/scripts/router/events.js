'use strict';

const router = require('./index');
const ui = require('./ui');

const routes = router.rootNode.children.map((route) => {
  return route.name;
});

const registerPaths = () => {
  routes.forEach((route) => {
    $(`a[href="#${route}"]`).on('click', (event) => {
      event.preventDefault();

      // router.navigate(route);

      ui.hideAllContent();
      ui.showContent(path);
    });
  });
};

module.exports = {
  registerPaths,
};
