'use strict';

const fs = require('fs');

function read(filename) {
  return fs.readFileSync(filename, {'encoding': 'utf8'});
}

exports.contents = {
  'filter': (test) => {
    const actual = read('tmp/helpers/filter.html');
    const expected = read('test/expected/helpers/filter.html');

    test.equal(actual, expected, 'should filter all entries');

    test.done();
  },
  'list': (test) => {
    const actual = read('tmp/helpers/list.html');
    const expected = read('test/expected/helpers/list.html');

    test.equal(actual, expected, 'should list all entries');

    test.done();
  },
};
