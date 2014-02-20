*This repository is a mirror of the [component](http://component.io) module [juliangruber/stream-debug](http://github.com/juliangruber/stream-debug). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/juliangruber-stream-debug`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# stream-debug

Debug streams. Outputs everything they do. Except for content. That might spam your console.

## Usage

```js
var debug = require('stream-debug');
var Stream = require('stream');

var stream = new Stream();
debug(stream, 'name');
stream.emit('data', 'foo');
// console.log: [name] data
```

## API

### debug(stream[, name])

Debug `stream` with optional `name`. Returns `stream` so you can do

```js
var stream = debug(new Stream(), 'name');
```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install stream-debug
```

## License

(MIT)
