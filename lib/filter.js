'use strict';

const path = require('path');

const minimatch = require('minimatch');

const list = require(path.join(__dirname, 'list'));

function filter(contents, pattern) {
  return list(contents).filter((entry) => minimatch(entry.filename, pattern));
}

module.exports = filter;
