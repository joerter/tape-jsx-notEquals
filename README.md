# tape-jsx-notEquals
Extension assertion for tape and jsx

[![npm](https://img.shields.io/npm/v/tape-jsx-equals.svg)](https://www.npmjs.com/package/tape-jsx-notequals)
[![npm](https://img.shields.io/npm/l/tape-jsx-equals.svg)](https://www.npmjs.com/package/tape-jsx-notequals)

[Tape](https://github.com/substack/tape) [extension](https://github.com/atabel/extend-tape) to assert two jsx strings are not equal.

`tape-jsx-notequals` uses [`react-element-to-jsx-string`](https://github.com/algolia/react-element-to-jsx-string) to compare two components'
rendered output.

## Install
```
$ npm install --save-dev extend-tape
$ npm install --save-dev tape-jsx-notequals
```
## How to use

Testing React components is very easy with `tape` + `tape-jsx-notequals`:

```javascript
const MyComponent = function ({color}) {
    const className = `box color-${color}`;
    return (
        <div className={className}></div>
    );
};
```

```javascript
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxNotEquals from 'tape-jsx-notequals';
import MyComponent from '../MyComponent';

// extend tape with jsxNotEqual assertion:
const test = addAssertions(tape, {jsxNotEquals});

test('MyComponent is not red', (t) => {
  const renderer = createRenderer();
  renderer.render(<MyComponent color="blue" />);
  const result = renderer.getRenderOutput();

  t.jsxNotEquals(result, <div className="box color-red"></div>);
  t.end();
});
```

## Run tests
```
$ npm install
$ npm test
