// __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import App from '../src/App';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});