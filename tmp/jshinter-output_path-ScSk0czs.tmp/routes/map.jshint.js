QUnit.module('JSHint | routes/map.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/map.js should pass jshint.\nroutes/map.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/map.js: line 3, col 2, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
