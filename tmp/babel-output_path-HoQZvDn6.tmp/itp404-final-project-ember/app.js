define('itp404-final-project-ember/app', ['exports', 'ember', 'itp404-final-project-ember/resolver', 'ember-load-initializers', 'itp404-final-project-ember/config/environment'], function (exports, _ember, _itp404FinalProjectEmberResolver, _emberLoadInitializers, _itp404FinalProjectEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _itp404FinalProjectEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp404FinalProjectEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _itp404FinalProjectEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _itp404FinalProjectEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});