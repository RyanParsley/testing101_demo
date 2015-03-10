var scales = require('../scales');

describe('findFifth', function () {
  it('should find the V note from root', function () {
    var fifth = scales.findFifth('A');
    expect(fifth).toBe('E');
  });
});

describe('findMinorThird', function () {
  it('should find the IIIb note from root', function () {
    var third = scales.findMinorThird('A');
    expect(third).toBe('C');
  });
});

describe('findMajorThird', function () {
  it('should find the III note from root', function () {
    var third = scales.findMajorThird('A');
    expect(third).toBe('Db');
  });
});
