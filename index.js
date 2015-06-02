function revelator(fn, inp) {
  return function (resolve, reject) { 
    fn(inp, function (err, result) {
      if (err) { return reject(err); }
      resolve(result);
    });
  }
}

module.exports = revelator;