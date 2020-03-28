const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Uniqui ID', () => {
  it('shold generate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});