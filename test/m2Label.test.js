const m2Label = require('./m2Label');

describe('m2Label', () => {
  it('should return the correct label for the last edit of a specific annotator', () => {
    const m2Edits = [
      {
        start: 1,
        end: 2,
        errorType: 'R:VERB:SVA',
        correction: 'is',
        annotatorId: 0,
      },
      {
        start: 2,
        end: 3,
        errorType: 'M:DET',
        correction: 'a',
        annotatorId: 1,
      },
      {
        start: 2,
        end: 3,
        errorType: 'R:SPELL',
        correction: 'grammatical',
        annotatorId: 0,
      },
    ];
    const sentence = 'This is a grammatical sentence.';

    const expectedResult = 'This is grammatical sentence.';
    const result = m2Label.getLabelForAnnotator(m2Edits, sentence, 0);

    expect(result).toBe(expectedResult);
  });

  it('should return the original sentence if there are no edits by the specified annotator', () => {
    const m2Edits = [
      {
        start: 1,
        end: 2,
        errorType: 'R:VERB:SVA',
        correction: 'is',
        annotatorId: 1,
      },
      {
        start: 2,
        end: 3,
        errorType: 'M:DET',
        correction: 'a',
        annotatorId: 1,
      },
      {
        start: 2,
        end: 3,
        errorType: 'R:SPELL',
        correction: 'grammatical',
        annotatorId: 2,
      },
    ];
    const sentence = 'This is a grammatical sentence.';

    const expectedResult = 'This is a grammatical sentence.';
    const result = m2Label.getLabelForAnnotator(m2Edits, sentence, 0);

    expect(result).toBe(expectedResult);
  });
});
