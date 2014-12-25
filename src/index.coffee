minimatch = require 'minimatch'

module.exports = (env, callback) ->

  filter = (contents, pattern) ->
    list(contents).filter (entry) ->
        if pattern? then minimatch(entry.filename, pattern) else true

  list = (contents) ->
    entries = []
    for key, value of contents._
      switch key
        when 'directories'
          subcontents = value.map (directory) -> list directory
          entries = [].concat.apply entries, subcontents
        else
          entries = entries.concat value
    entries.sort (a, b) -> a.filename.localeCompare b.filename

  env.helpers.contents =
    filter: filter
    list: list

  callback()
