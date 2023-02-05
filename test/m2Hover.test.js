const m2Hover = require('./m2Hover');

describe('m2Hover', () => {
  it('should return the correct hover text for an M2 edit', () => {
    const m2Edit = {
      start: 1,
      end: 2,
      errorType: 'R:VERB:SVA',
      correction: 'is',
      annotatorId: 0,
    };
    const sentence = 'This is a grammatical sentence.';

    const expectedResult = 'This <mark>is</mark> a grammatical sentence.';
    const result = m2Hover.getHoverText(m2Edit, sentence);

    expect(result).toBe(expectedResult);
  });

  it('should return the original sentence if the M2 edit is invalid', () => {
    const m2Edit = {};
    const sentence = 'This is a grammatical sentence.';

    const expectedResult = 'This is a grammatical sentence.';
    const result = m2Hover.getHoverText(m2Edit, sentence);

    expect(result).toBe(expectedResult);
  });
});
