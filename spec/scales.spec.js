var scales = require('../scales');

describe('findFifth', function () {
  it('should find the V note from root', function () {
    var fifth = scales.findFifth('A');
    expect(fifth).toBe('E');
  });
});
