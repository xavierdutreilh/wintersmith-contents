'use strict';

var grunt = require('grunt');

exports.contents = {
  filter: function(test) {
    var actual = grunt.file.read('tmp/build/helpers/filter.html');
    var expected = grunt.file.read('test/expected/helpers/filter.html');

    test.equal(actual, expected, 'should filter all entries');

    test.done();
  },
  list: function(test) {
    var actual = grunt.file.read('tmp/build/helpers/list.html');
    var expected = grunt.file.read('test/expected/helpers/list.html');

    test.equal(actual, expected, 'should list all entries');

    test.done();
  },
};
