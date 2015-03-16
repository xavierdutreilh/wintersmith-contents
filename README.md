# wintersmith-contents [![Build Status](https://travis-ci.org/xavierdutreilh/wintersmith-contents.svg)](https://travis-ci.org/xavierdutreilh/wintersmith-contents)

A [Wintersmith](https://github.com/jnordberg/wintersmith) plugin to manipulate contents

## Installing

Install globally or locally using npm

```
npm install [-g] wintersmith-contents
```

and add `wintersmith-contents` to your config.json

```json
{
  "plugins": [
    "wintersmith-contents"
  ]
}
```

## Using

List all entries

```javascript
env.helpers.contents.list(contents)
```

List all entries from a given subtree

```javascript
env.helpers.contents.list(contents.articles)
```

List all text files

```javascript
env.helpers.contents.filter(contents, '**/*.txt')
```

Please note that `wintersmith-contents` relies on `minimatch` to match filenames with specified patterns. So, any pattern supported by `minimatch` is also supported by `wintersmith-contents`.

## Running tests

```
npm install
npm test
```
