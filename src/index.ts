import { PHONENUMBER_REGEX } from './util';

export interface SplitTextByPhonenumberResult {
  value: string;
  type: 'string' | 'number';
}

/**
 * Function to split a string by phonenumber(s).
 */
export const splitTextByPhonenumber = (matchAllArray: RegExpMatchArray[]): SplitTextByPhonenumberResult[] => {
  let temp = 0;

  const result: SplitTextByPhonenumberResult[] = [];

  matchAllArray.forEach((el, idx, arr) => {
    const text = el['input']!.slice(temp, el['index']!);
    const lastIndexOfNumber = el['index']! + el['0'].length;
    const number = el['input']!.slice(el['index']!, lastIndexOfNumber);

    temp = lastIndexOfNumber;

    if (idx === arr.length - 1) {
      const lastElem = el['input']!.slice(lastIndexOfNumber, el['input']!.length);
      result.push(
        { value: text, type: 'string' },
        { value: number, type: 'number' },
        { value: lastElem, type: 'string' }
      );
    } else {
      result.push({ value: text, type: 'string' }, { value: number, type: 'number' });
    }
  });

  return result;
};

/**
 * Detect if string has phonenumber(s). If transform arg is true, it will transform string
 * into array of objects divided by type (string or number). Otherwise, it will return
 * boolean.
 * */
export const detectPhonenumberFromText = (
  text: string,
  transform?: boolean
): SplitTextByPhonenumberResult[] | boolean => {
  const phoneMatch = text.matchAll(PHONENUMBER_REGEX);
  const phoneMatchArray = Array.from(phoneMatch);

  return phoneMatchArray.length && transform ? splitTextByPhonenumber(phoneMatchArray) : !!phoneMatchArray.length;
};
