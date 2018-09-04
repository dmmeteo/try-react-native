import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
// TODO try react-native tests
it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
