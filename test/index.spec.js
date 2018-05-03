const models = require('../src/index');

describe('index', function() {
  it('should be an object with the types.', function(done) {
    expect(models).to.be.an('object').with.all.keys(
      'DateType',
      'CursorType',
    );
    done();
  });
});
