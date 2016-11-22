define('itp404-final-project-ember/tests/routes/map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/map.js should pass jshint.\nroutes/map.js: line 6, col 7, Expected \':\' and instead saw \'table\'.\nroutes/map.js: line 6, col 12, Expected an identifier and instead saw \';\'.\nroutes/map.js: line 8, col 3, Expected \'}\' to match \'{\' from line 3 and instead saw \'var\'.\nroutes/map.js: line 8, col 7, Expected \')\' and instead saw \'highestPop\'.\nroutes/map.js: line 44, col 11, \'city\' is defined but never used.\nroutes/map.js: line 64, col 3, Unrecoverable syntax error. (95% scanned).\n\n6 errors');
  });
});