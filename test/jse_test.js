'use strict';

var grunt = require('grunt');
var exec = require('child_process').exec;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.jse = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default: function(test) {
		var actual, expected;
    test.expect(3);

    actual = grunt.file.read('tmp/default/src/My/Default/Awesome/Module/Module.js');
    expected = grunt.file.read('test/expected/default.class.js');
    test.equal(actual, expected, 'should create a skeleton for the jse class.');

    actual = grunt.file.read('tmp/default/test/spec/My/Default/Awesome/Module/ModuleSpec.js');
    expected = grunt.file.read('test/expected/default.spec.js');
    test.equal(actual, expected, 'should create a skeleton for the jse spec.');

    actual = grunt.file.read('tmp/default/test/spec/Import/My/Default/Awesome/Module/Module.js');
    expected = grunt.file.read('test/expected/default.import.js');
    test.equal(actual, expected, 'should create a skeleton for the jse spec import.');

    test.done();
  },
};
