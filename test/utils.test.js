const { extractAnnotations, extractSentence, getAnnotatorIds } = require('./utils');

describe('extractAnnotations', () => {
  it('should extract annotations from M2 format string', () => {
    const m2String = `S This is a grammatical sentence.
A 1 2|||R:VERB:SVA|||is|||REQUIRED|||-NONE-|||0
A 2 2|||M:DET|||a|||REQUIRED|||-NONE-|||0
A 2 3|||R:SPELL|||grammatical|||REQUIRED|||-NONE-|||0
A -1 -1|||noop|||-NONE-|||REQUIRED|||-NONE-|||1`;
    const expected = [
      {
        start: 1,
        end: 2,
        errorType: 'R:VERB:SVA',
        correction: 'is',
        annotatorId: 0
      },
      {
        start: 2,
        end: 2,
        errorType: 'M:DET',
        correction: 'a',
        annotatorId: 0
      },
      {
        start: 2,
        end: 3,
        errorType: 'R:SPELL',
        correction: 'grammatical',
        annotatorId: 0
      },
      {
        start: -1,
        end: -1,
        errorType: 'noop',
        correction: '-NONE-',
        annotatorId: 1
      }
    ];
    expect(extractAnnotations(m2String)).toEqual(expected);
  });
});

describe('extractSentence', () => {
  it('should extract the original sentence from M2 format string', () => {
    const m2String = `S This is a grammatical sentence.
A 1 2|||R:VERB:SVA|||is|||REQUIRED|||-NONE-|||0`;
    expect(extractSentence(m2String)).toBe('This is a grammatical sentence.');
  });
});

describe('getAnnotatorIds', () => {
  it('should return the unique annotator ids from the annotations', () => {
    const annotations = [
      { annotatorId: 0 },
      { annotatorId: 1 },
      { annotatorId: 0 }
    ];
    expect(getAnnotatorIds(annotations)).toEqual([0, 1]);
  });
});
