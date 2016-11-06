define('itp404-final-project-ember/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'itp404-final-project-ember/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _itp404FinalProjectEmberConfigEnvironment) {

  var name = _itp404FinalProjectEmberConfigEnvironment['default'].APP.name;
  var version = _itp404FinalProjectEmberConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});