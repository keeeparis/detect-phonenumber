# detect-phonenumber
NPM package to detect phonenumber.

## Installation

```bash
npm install detect-phonenumber
yarn add detect-phonenumber
```

## Usage
You can check whether string contains phonenumber(s).

```js
import detectPhonenumber from 'detect-phonenumber'

detectPhonenumber('8 (800) 555-35-35') // true
detectPhonenumber('8 (800) 555-35-35 another text here +77028012982') // true
detectPhonenumber('some text without number') // false
```

Also, if you pass second argument as `true`, you will get array of objects divided by phonenumber and text. Use case - you want to highlight phonenumber in text.

```js
import detectPhonenumber from 'detect-phonenumber'

detectPhonenumber('8 (800) 555-35-35', true) // [{type: 'number', value: '8 (800) 555-35-35'}]
detectPhonenumber('8 (800) 555-35-35 another text here +77028012982', true) // [{type: 'number', value: '8 (800) 555-35-35'}, {type: 'text', value: ' another text here '}, {type: 'number', value: '+77028012982'}]
detectPhonenumber('some text without number', true) // false
```

## Phonenumber formats to check against
```js
1. +77750002248
2. 87051009263 // starts without +
3. +7 701 772 6172 // with spaces
4. +7 775 065 00 11
5. +7(775)0650011 // with brackets, without spaces
6. +7-775-065-00-11 // separated by dash
7. +7 775.065.00.11 // separeted by dot
```
If you want to add more formats, you can open issue or PR. I will be happy to add them.

## Test:
To run tests, use the following command:
```bash
npm run test
```

## License
MIT

## Author
[Vladimir Trotsenko](https://github.com/keeeparis)
