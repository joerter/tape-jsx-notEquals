import React from 'react';
import {createRenderer} from 'react-addons-test-utils';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxNotEquals from '../src';

const test = addAssertions(tape, {jsxNotEquals});
const renderer = createRenderer();

const MyComponent = ({color}) => {
  const className = `box-color-${color}`;
  return (
    <div className={className}></div>
  );
};

test('asserts two jsx strings are not equal', (t) => {
  renderer.render(<MyComponent color='red' />);
  const actual = renderer.getRenderOutput();

  t.jsxNotEquals(actual, <div className='box-color-blue'></div>);
  t.end();
});
