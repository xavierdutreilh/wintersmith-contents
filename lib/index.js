'use strict';

const path = require('path');

const filter = require(path.join(__dirname, 'filter'));
const list = require(path.join(__dirname, 'list'));

function index(env, callback) {
  env.helpers.contents = {
    'filter': filter,
    'list': list,
  };

  callback();
}

module.exports = index;
