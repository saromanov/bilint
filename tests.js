var assert = require('assert');
var bilint = require('./lib/bilint');

it('should check input', function(){
    assert.equal(bilint(0,0, [], [1,2,3], [4,5,6], [7,8,9]), 0);
    assert.equal(bilint(0,0, [1,2,3], [4,5,6], [7,8,9], [0,1,2]), 0);
});
