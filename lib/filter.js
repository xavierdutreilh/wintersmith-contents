const minimatch = require('minimatch')

const list = require('./list')

function filter (contents, pattern) {
  return list(contents).filter((entry) => minimatch(entry.filename, pattern))
}

module.exports = filter
