
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
