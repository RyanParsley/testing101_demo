var scales = require('../scales');

describe('findDominant', function () {
  it('should find the V note from root', function () {
    var dominant = scales.findDominant('A');
    expect(dominant).toBe('E');
  });
});
