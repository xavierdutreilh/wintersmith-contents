'use strict';

var fs = require('fs');

function read(filename) {
  return fs.readFileSync(filename, {'encoding': 'utf8'});
}

exports.contents = {
  'filter': function(test) {
    var actual = read('tmp/helpers/filter.html');
    var expected = read('test/expected/helpers/filter.html');

    test.equal(actual, expected, 'should filter all entries');

    test.done();
  },
  'list': function(test) {
    var actual = read('tmp/helpers/list.html');
    var expected = read('test/expected/helpers/list.html');

    test.equal(actual, expected, 'should list all entries');

    test.done();
  },
};
