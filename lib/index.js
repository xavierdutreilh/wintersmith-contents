const filter = require('./filter')
const list = require('./list')

function index (env, callback) {
  env.helpers.contents = {filter, list}

  callback()
}

module.exports = index
