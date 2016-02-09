import reactElementToString from 'react-element-to-jsx-string';

export default function jsxNotEquals (actual, expected, message) {
  this.notEquals(reactElementToString(actual), reactElementToString(expected), message);
};
