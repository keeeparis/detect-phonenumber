import { detectPhonenumberFromText } from '../src/index';

describe('Testing detectPhonenumberFromText', () => {
  it('should return false if no phone number found', () => {
    const text = 'This is a test';
    expect(detectPhonenumberFromText(text)).toBe(false);
  });

  it('should return array of splitted string if found', () => {
    const textArray = [
      {
        text: 'sd +77750002248 dsdd',
        value: [
          { value: 'sd ', type: 'string' },
          { value: '+77750002248', type: 'number' },
          { value: ' dsdd', type: 'string' }
        ]
      },
      {
        text: 'some text 87051009263 here',
        value: [
          { value: 'some text ', type: 'string' },
          { value: '87051009263', type: 'number' },
          { value: ' here', type: 'string' }
        ]
      },
      {
        text: 'some +77750002248',
        value: [
          { value: 'some ', type: 'string' },
          { value: '+77750002248', type: 'number' },
          { value: '', type: 'string' }
        ]
      },
      {
        text: '+7 701 772 6172 text',
        value: [
          { value: '', type: 'string' },
          { value: '+7 701 772 6172', type: 'number' },
          { value: ' text', type: 'string' }
        ]
      },
      {
        text: 'asd +7 701 772 6172 text 87051009263',
        value: [
          { value: 'asd ', type: 'string' },
          { value: '+7 701 772 6172', type: 'number' },
          { value: ' text ', type: 'string' },
          { value: '87051009263', type: 'number' },
          { value: '', type: 'string' }
        ]
      },
      {
        text: '+7 775 065 00 11 text',
        value: [
          { value: '', type: 'string' },
          { value: '+7 775 065 00 11', type: 'number' },
          { value: ' text', type: 'string' }
        ]
      },
      {
        text: '+7(775)0650011 text',
        value: [
          { value: '', type: 'string' },
          { value: '+7(775)0650011', type: 'number' },
          { value: ' text', type: 'string' }
        ]
      },
      {
        text: '+7-775-065-00-11 text',
        value: [
          { value: '', type: 'string' },
          { value: '+7-775-065-00-11', type: 'number' },
          { value: ' text', type: 'string' }
        ]
      },
      {
        text: '+7 775.065.00.11 text',
        value: [
          { value: '', type: 'string' },
          { value: '+7 775.065.00.11', type: 'number' },
          { value: ' text', type: 'string' }
        ]
      }
    ];

    textArray.forEach(el => {
      expect(detectPhonenumberFromText(el.text, true)).toStrictEqual(el.value);
    });
  });
});
