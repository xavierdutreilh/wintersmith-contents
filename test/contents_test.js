const fs = require('fs')

function read (filename) {
  return fs.readFileSync(filename, 'utf8')
}

exports.contents = {
  filter(test) {
    const actual = read(`${__dirname}/../tmp/filter.html`)
    const expected = read(`${__dirname}/expected/filter.html`)

    test.equal(actual, expected, 'should filter all entries')

    test.done()
  },
  list(test) {
    const actual = read(`${__dirname}/../tmp/list.html`)
    const expected = read(`${__dirname}/expected/list.html`)

    test.equal(actual, expected, 'should list all entries')

    test.done()
  }
}
