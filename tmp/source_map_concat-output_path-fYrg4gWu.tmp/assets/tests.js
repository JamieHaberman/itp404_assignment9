'use strict';

define('itp404-final-project-ember/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('itp404-final-project-ember/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'itp404-final-project-ember/tests/helpers/start-app', 'itp404-final-project-ember/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _itp404FinalProjectEmberTestsHelpersStartApp, _itp404FinalProjectEmberTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _itp404FinalProjectEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _itp404FinalProjectEmberTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('itp404-final-project-ember/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/helpers/resolver', ['exports', 'itp404-final-project-ember/resolver', 'itp404-final-project-ember/config/environment'], function (exports, _itp404FinalProjectEmberResolver, _itp404FinalProjectEmberConfigEnvironment) {

  var resolver = _itp404FinalProjectEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp404FinalProjectEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp404FinalProjectEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('itp404-final-project-ember/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
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
define('itp404-final-project-ember/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/itp404-final-project-ember/templates/p5.min.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | itp404-final-project-ember/templates/p5.min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'itp404-final-project-ember/templates/p5.min.js should pass jshint.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 64, Expected \'===\' and instead saw \'==\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 93, Expected \'!==\' and instead saw \'!=\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 107, Expected \'{\' and instead saw \'module\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 146, Expected \'===\' and instead saw \'==\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 172, Expected \'{\' and instead saw \'define\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 211, Expected \'!==\' and instead saw \'!=\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 245, Expected \'!==\' and instead saw \'!=\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 279, Expected \'!==\' and instead saw \'!=\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 308, Expected an assignment or function call and instead saw an expression.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 309, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 428, Expected \'===\' and instead saw \'==\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 461, Expected \'{\' and instead saw \'return\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 481, Expected \'{\' and instead saw \'return\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 554, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 554, Expected an identifier and instead saw \'=\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 554, Expected an assignment or function call and instead saw an expression.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 555, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 574, Expected an assignment or function call and instead saw an expression.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 575, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 667, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 689, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 709, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 732, Expected \'===\' and instead saw \'==\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 775, Expected \'{\' and instead saw \'e\'.\nitp404-final-project-ember/templates/p5.min.js: line 1, col 791, Missing semicolon.\nitp404-final-project-ember/templates/p5.min.js: line 2, col 9818, A leading decimal point can be confused with a dot: \'.001\'.\nitp404-final-project-ember/templates/p5.min.js: line 2, col 9827, A leading decimal point can be confused with a dot: \'.001\'.\nitp404-final-project-ember/templates/p5.min.js: line 3, col 23322, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 3, col 23753, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 3, col 23911, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 7825, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 7834, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 7915, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 7924, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17892, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17899, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17933, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17940, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 17945, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 18042, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 4, col 18070, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7289, A leading decimal point can be confused with a dot: \'.5522847498\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7686, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7689, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7778, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 7782, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 8725, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 8728, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 9237, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 9241, A leading decimal point can be confused with a dot: \'.5\'.\nitp404-final-project-ember/templates/p5.min.js: line 5, col 9241, Too many errors. (55% scanned).\n\n51 errors');
  });
});
define('itp404-final-project-ember/tests/p5.min.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | p5.min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'p5.min.js should pass jshint.\np5.min.js: line 1, col 64, Expected \'===\' and instead saw \'==\'.\np5.min.js: line 1, col 93, Expected \'!==\' and instead saw \'!=\'.\np5.min.js: line 1, col 107, Expected \'{\' and instead saw \'module\'.\np5.min.js: line 1, col 146, Expected \'===\' and instead saw \'==\'.\np5.min.js: line 1, col 172, Expected \'{\' and instead saw \'define\'.\np5.min.js: line 1, col 211, Expected \'!==\' and instead saw \'!=\'.\np5.min.js: line 1, col 245, Expected \'!==\' and instead saw \'!=\'.\np5.min.js: line 1, col 279, Expected \'!==\' and instead saw \'!=\'.\np5.min.js: line 1, col 308, Expected an assignment or function call and instead saw an expression.\np5.min.js: line 1, col 309, Missing semicolon.\np5.min.js: line 1, col 428, Expected \'===\' and instead saw \'==\'.\np5.min.js: line 1, col 461, Expected \'{\' and instead saw \'return\'.\np5.min.js: line 1, col 481, Expected \'{\' and instead saw \'return\'.\np5.min.js: line 1, col 554, Missing semicolon.\np5.min.js: line 1, col 554, Expected an identifier and instead saw \'=\'.\np5.min.js: line 1, col 554, Expected an assignment or function call and instead saw an expression.\np5.min.js: line 1, col 555, Missing semicolon.\np5.min.js: line 1, col 574, Expected an assignment or function call and instead saw an expression.\np5.min.js: line 1, col 575, Missing semicolon.\np5.min.js: line 1, col 667, Missing semicolon.\np5.min.js: line 1, col 689, Missing semicolon.\np5.min.js: line 1, col 709, Missing semicolon.\np5.min.js: line 1, col 732, Expected \'===\' and instead saw \'==\'.\np5.min.js: line 1, col 775, Expected \'{\' and instead saw \'e\'.\np5.min.js: line 1, col 791, Missing semicolon.\np5.min.js: line 2, col 9818, A leading decimal point can be confused with a dot: \'.001\'.\np5.min.js: line 2, col 9827, A leading decimal point can be confused with a dot: \'.001\'.\np5.min.js: line 3, col 23322, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 3, col 23753, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 3, col 23911, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 7825, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 7834, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 7915, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 7924, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17892, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17899, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17933, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17940, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 17945, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 18042, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 4, col 18070, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 7289, A leading decimal point can be confused with a dot: \'.5522847498\'.\np5.min.js: line 5, col 7686, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 7689, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 7778, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 7782, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 8725, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 8728, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 9237, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 9241, A leading decimal point can be confused with a dot: \'.5\'.\np5.min.js: line 5, col 9241, Too many errors. (55% scanned).\n\n51 errors');
  });
});
define('itp404-final-project-ember/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/routes/map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/map.js should pass jshint.\nroutes/map.js: line 6, col 7, Expected \':\' and instead saw \'table\'.\nroutes/map.js: line 6, col 12, Expected an identifier and instead saw \';\'.\nroutes/map.js: line 8, col 3, Expected \'}\' to match \'{\' from line 3 and instead saw \'var\'.\nroutes/map.js: line 8, col 7, Expected \')\' and instead saw \'highestPop\'.\nroutes/map.js: line 44, col 11, \'city\' is defined but never used.\nroutes/map.js: line 64, col 3, Unrecoverable syntax error. (95% scanned).\n\n6 errors');
  });
});
define('itp404-final-project-ember/tests/routes/p5.min.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/p5.min.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/p5.min.js should pass jshint.\nroutes/p5.min.js: line 1, col 64, Expected \'===\' and instead saw \'==\'.\nroutes/p5.min.js: line 1, col 93, Expected \'!==\' and instead saw \'!=\'.\nroutes/p5.min.js: line 1, col 107, Expected \'{\' and instead saw \'module\'.\nroutes/p5.min.js: line 1, col 146, Expected \'===\' and instead saw \'==\'.\nroutes/p5.min.js: line 1, col 172, Expected \'{\' and instead saw \'define\'.\nroutes/p5.min.js: line 1, col 211, Expected \'!==\' and instead saw \'!=\'.\nroutes/p5.min.js: line 1, col 245, Expected \'!==\' and instead saw \'!=\'.\nroutes/p5.min.js: line 1, col 279, Expected \'!==\' and instead saw \'!=\'.\nroutes/p5.min.js: line 1, col 308, Expected an assignment or function call and instead saw an expression.\nroutes/p5.min.js: line 1, col 309, Missing semicolon.\nroutes/p5.min.js: line 1, col 428, Expected \'===\' and instead saw \'==\'.\nroutes/p5.min.js: line 1, col 461, Expected \'{\' and instead saw \'return\'.\nroutes/p5.min.js: line 1, col 481, Expected \'{\' and instead saw \'return\'.\nroutes/p5.min.js: line 1, col 554, Missing semicolon.\nroutes/p5.min.js: line 1, col 554, Expected an identifier and instead saw \'=\'.\nroutes/p5.min.js: line 1, col 554, Expected an assignment or function call and instead saw an expression.\nroutes/p5.min.js: line 1, col 555, Missing semicolon.\nroutes/p5.min.js: line 1, col 574, Expected an assignment or function call and instead saw an expression.\nroutes/p5.min.js: line 1, col 575, Missing semicolon.\nroutes/p5.min.js: line 1, col 667, Missing semicolon.\nroutes/p5.min.js: line 1, col 689, Missing semicolon.\nroutes/p5.min.js: line 1, col 709, Missing semicolon.\nroutes/p5.min.js: line 1, col 732, Expected \'===\' and instead saw \'==\'.\nroutes/p5.min.js: line 1, col 775, Expected \'{\' and instead saw \'e\'.\nroutes/p5.min.js: line 1, col 791, Missing semicolon.\nroutes/p5.min.js: line 2, col 9818, A leading decimal point can be confused with a dot: \'.001\'.\nroutes/p5.min.js: line 2, col 9827, A leading decimal point can be confused with a dot: \'.001\'.\nroutes/p5.min.js: line 3, col 23322, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 3, col 23753, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 3, col 23911, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 7825, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 7834, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 7915, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 7924, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17892, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17899, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17933, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17940, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 17945, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 18042, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 4, col 18070, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 7289, A leading decimal point can be confused with a dot: \'.5522847498\'.\nroutes/p5.min.js: line 5, col 7686, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 7689, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 7778, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 7782, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 8725, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 8728, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 9237, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 9241, A leading decimal point can be confused with a dot: \'.5\'.\nroutes/p5.min.js: line 5, col 9241, Too many errors. (55% scanned).\n\n51 errors');
  });
});
define('itp404-final-project-ember/tests/test-helper', ['exports', 'itp404-final-project-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _itp404FinalProjectEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_itp404FinalProjectEmberTestsHelpersResolver['default']);
});
define('itp404-final-project-ember/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('itp404-final-project-ember/tests/unit/routes/map-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:map', 'Unit | Route | map', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp404-final-project-ember/tests/unit/routes/map-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/map-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/map-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('itp404-final-project-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
