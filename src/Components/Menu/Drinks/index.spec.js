import React from 'react';
import ReactDOM from 'react-dom';
import Drinks from './index';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

describe('Component: Drinks', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Drinks drinks={[]} checkedInput={jest.fn()} checked='false'/>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should match its snapshot with drinks', () => {
    const drinks = [
      {
          "id": 100,
          "name": "Coca",
          "price": 2
      },
      {
          "id": 101,
          "name": "Coca Light",
          "price": 2
      },
      {
          "id": 102,
          "name": "Coca Zéro",
          "price": 2
      },
      {
          "id": 103,
          "name": "Orangina",
          "price": 2
      },
      {
          "id": 104,
          "name": "Shweppes",
          "price": 2
      },
      {
          "id": 105,
          "name": "Seven up",
          "price": 2
      },
      {
          "id": 106,
          "name": "Ice Tea",
          "price": 2
      },
      {
          "id": 107,
          "name": "Perrier 33cl",
          "price": 2
      },
      {
          "id": 108,
          "name": "Badoit 33cl",
          "price": 2
      },
      {
          "id": 109,
          "name": "Jus de Tomate",
          "price": 2
      },
      {
          "id": 110,
          "name": "Jus Pago",
          "price": 2,
          "flavor": [
              "Orange",
              "Mangue",
              "Abricot",
              "Fraise"
          ]
      },
      {
          "id": 111,
          "name": "Kingfisher bière indienne",
          "price": 5
      },
      {
          "id": 112,
          "name": "Duvel",
          "price": 5
      },
      {
          "id": 113,
          "name": "Leffre Brune",
          "price": 5
      },
      {
          "id": 114,
          "name": "Pelforth brune",
          "price": 5
      }
    ];

  const tree = renderer.create(
    <Drinks drinks={drinks} checkedInput={jest.fn()} checked='false'/>
   ).toJSON();

  expect(tree).toMatchSnapshot();
});
  it('should check input on onChange function', () => {
    const component = mount(<Drinks />);
    component.find('input').simulate('change', { target: { checked: true } });

    expect(toJson(component)).toMatchSnapshot();
  });
});
