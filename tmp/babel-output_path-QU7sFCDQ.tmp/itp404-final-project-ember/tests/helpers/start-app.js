define('itp404-final-project-ember/tests/helpers/start-app', ['exports', 'ember', 'itp404-final-project-ember/app', 'itp404-final-project-ember/config/environment'], function (exports, _ember, _itp404FinalProjectEmberApp, _itp404FinalProjectEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _itp404FinalProjectEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _itp404FinalProjectEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});