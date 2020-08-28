import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import * as renderer from 'react-test-renderer';
import App from './App';


test('App snapshot test', () => {
  const component = renderer.create(<BrowserRouter><App /></BrowserRouter>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
