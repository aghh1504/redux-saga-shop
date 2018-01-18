import React from 'react';
import ReactDOM from 'react-dom';
import Basket from './index';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: Basket', () => {
  const items = ['Learn react', 'rest', 'go out'];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Basket />
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
