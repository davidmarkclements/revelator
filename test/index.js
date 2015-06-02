var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

var Promise = require('lie');
var revelator = require('../');


describe('revelator', function () {
  it('should pass errback error objects to reject', function () {
    function asyncOpFail(val, cb) {
      setTimeout(cb, 50, Error('test'));
    }
    return (new Promise(revelator(asyncOpFail, 123))).should.be.rejectedWith('test');
  })

  it('should, upon success, pass values to resolve', function () {
    function asyncOp(val, cb) {
      setTimeout(cb, 50, null, {val: val})
    }
    return (new Promise(revelator(asyncOp, 123))).should.eventually.deep.equal({val: 123});
  });
});