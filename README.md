# wintersmith-contents [![Build Status](https://travis-ci.org/xavierdutreilh/wintersmith-contents.svg?branch=master)](https://travis-ci.org/xavierdutreilh/wintersmith-contents)

> A [Wintersmith](https://github.com/jnordberg/wintersmith) plugin to manipulate contents

## Installation

Install globally or locally using npm:

```bash
npm install [-g] wintersmith-contents
```

Add `wintersmith-contents` to your `config.json`:

```json
{
  "plugins": [
    "wintersmith-contents"
  ]
}
```

## Usage

List all entries:

```javascript
env.helpers.contents.list(contents);
```

List all entries from a given subtree:

```javascript
env.helpers.contents.list(contents.articles);
```

List all text files:

```javascript
env.helpers.contents.filter(contents, '**/*.txt');
```

Please note that `wintersmith-contents` relies on `minimatch` to match filenames with specified patterns. So, any pattern supported by `minimatch` is also supported by `wintersmith-contents`.

## License

`wintersmith-contents` is released under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).
