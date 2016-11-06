define('itp404-final-project-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'itp404-final-project-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _itp404FinalProjectEmberConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_itp404FinalProjectEmberConfigEnvironment['default'].APP.name, _itp404FinalProjectEmberConfigEnvironment['default'].APP.version)
  };
});