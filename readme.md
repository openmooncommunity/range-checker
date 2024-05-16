# Range Checker

[![GitHub license](https://img.shields.io/github/license/openmooncommunity/range-checker)](https://github.com/openmooncommunity/range-checker/blob/main/LICENSE)

A simple utility to check if a number is within a specified range.

## Installation

```bash
npm install range-checker
```

## Usage

```javascript
import isInRange from 'range-checker';

// Check if a number is within the range
console.log(isInRange(30, { start: 10, end: 100 })); //=> true
```

## API

### isInRange(number, options)

Check if a number is within a given range.

- `number`: The number to check.
- `options`: An object containing options for specifying the range.
  - `start` (optional): The start of the range. Default is `0`.
  - `end`: The end of the range.

Returns `true` if the number is within the range, `false` otherwise.

## Examples

```javascript
import isInRange from 'range-checker';

// Check if a number is within different ranges
console.log(isInRange(30, { end: 100 })); //=> true
console.log(isInRange(30, { start: 100, end: 10 })); //=> true
console.log(isInRange(30, { end: 10 })); //=> false
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.