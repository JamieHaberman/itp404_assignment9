define('itp404-final-project-ember/router', ['exports', 'ember', 'itp404-final-project-ember/config/environment'], function (exports, _ember, _itp404FinalProjectEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _itp404FinalProjectEmberConfigEnvironment['default'].locationType,
    rootURL: _itp404FinalProjectEmberConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('map');
  });

  exports['default'] = Router;
});