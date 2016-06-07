'use strict';

const fs = require('fs');
const path = require('path');

function read(filename) {
  return fs.readFileSync(filename, 'utf8');
}

exports.contents = {
  'filter': (test) => {
    const actual = read(path.join(__dirname, '..', 'tmp', 'filter.html'));
    const expected = read(path.join(__dirname, 'expected', 'filter.html'));

    test.equal(actual, expected, 'should filter all entries');

    test.done();
  },
  'list': (test) => {
    const actual = read(path.join(__dirname, '..', 'tmp', 'list.html'));
    const expected = read(path.join(__dirname, 'expected', 'list.html'));

    test.equal(actual, expected, 'should list all entries');

    test.done();
  },
};
