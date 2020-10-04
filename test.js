const add = require('../api-request.js');

QUnit.module('formatDate');

QUnit.test('Format two numbers', assert => {
    assert.equal(formatDate(new Date()), "2020-10-04", '2020-10-04');
});