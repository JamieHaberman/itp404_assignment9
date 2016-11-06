define('itp404-final-project-ember/tests/helpers/resolver', ['exports', 'itp404-final-project-ember/resolver', 'itp404-final-project-ember/config/environment'], function (exports, _itp404FinalProjectEmberResolver, _itp404FinalProjectEmberConfigEnvironment) {

  var resolver = _itp404FinalProjectEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp404FinalProjectEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp404FinalProjectEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});