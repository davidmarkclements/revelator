# Revelator

An alternative to promisify

Convert error-first callbacks to [revealing constructor pattern][] callbacks
as used by the native ES6 `Promise` constructor.

## Usage

```js
function asyncOp(val, cb) {
   setTimeout(cb, 500, null, {val: val})
}

function doAsync(val) {
  return new Promise(revelator(asyncOp, val));
}
```


## Why

* Directly using the Promise API seems clearer and cleaner
* This may (with some adaptation) have future uses beyond promises (e.g. the browser Streams API)


## Contribution

* Sponsored by [nearForm][]



[nearForm]: http://www.nearform.com
[revealing constructor pattern]: https://blog.domenic.me/the-revealing-constructor-pattern/
