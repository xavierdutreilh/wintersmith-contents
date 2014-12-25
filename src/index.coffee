minimatch = require 'minimatch'

module.exports = (env, callback) ->

  filter = (contents, pattern) ->
    list(contents).filter (entry) ->
        if pattern? then minimatch(entry.filename, pattern) else true

  list = (contents) ->
    directories = contents._.directories.map (directory) -> list directory
    entries = [].concat.apply contents._.files, directories
    entries.push contents.index if contents.index?
    entries.sort (a, b) -> a.filename.localeCompare b.filename

  env.helpers.contents =
    filter: filter
    list: list

  callback()
