module.exports = debug;

function debug (stream, name) {
  name = '[' + name + '] ';

  function log (event) {
    return function () {
      console.log('[' + name + '] ' + event + ';');
    }
  }

  stream.on('end', log('end'));
  stream.on('data', log('data'));
  stream.on('error', function (err) {
    log('error')(); throw err;
  });
  stream.on('close', log('close'));
  stream.on('drain', log('drain'));
  stream.on('finish', log('finish'));
  stream.on('pipe', log('pipe'));
  stream.on('unpipe', log('unpipe'));
  
  return stream;
}
