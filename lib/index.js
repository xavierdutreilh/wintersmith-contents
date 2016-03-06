'use strict';

const minimatch = require('minimatch');

module.exports = function(env, callback) {
  function list(contents) {
    let entries = [];

    for (let key in contents._) {
      if (key in contents._) {
        const value = contents._[key];

        switch (key) {
          case 'directories':
            entries = Array.prototype.concat.apply(entries, value.map(list));
            break;
          default:
            entries = entries.concat(value);
        }
      }
    }

    return entries.sort((a, b) => a.filename.localeCompare(b.filename));
  }

  function filter(contents, pattern) {
    return list(contents).filter((entry) => minimatch(entry.filename, pattern));
  }

  env.helpers.contents = {
    'filter': filter,
    'list': list,
  };

  callback();
};
