import React from 'react';
import ReactDOM from 'react-dom';
import Sandwishes from './index';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: Sandwishes', () => {
  const sandwishes = [
      {
          "id": 1,
          "preparationTimeSeconds": 600,
          "name": "Tikka Naan Roll",
          "description": "Filets de poulet marinés et rôtis au Tandoor roulé dans un naan",
          "options": [
              {
                  "name": "Supplement fromage",
                  "price": 1
              }
          ],
          "price": 5
      },
      {
          "id": 2,
          "preparationTimeSeconds": 600,
          "name": "Sheek Naan Roll",
          "description": "Brochette de boeuf haché rôtie au Tandoor roulée dans un naan",
          "options": [
              {
                  "name": "Supplement fromage",
                  "price": 1
              }
          ],
          "price": 5
      },
      {
          "id": 3,
          "preparationTimeSeconds": 600,
          "name": "Pakora Naan Roll",
          "description": "Beignets d'aubergines à la farine de poix chiche roulés dans un naan",
          "options": [
              {
                  "name": "Supplement fromage",
                  "price": 1
              }
          ],
          "price": 5
      },
      {
          "id": 4,
          "preparationTimeSeconds": 600,
          "name": "Paneer Naan Roll",
          "description": "Fromage indien maison mariné et rôti au Tandoor roulé dans un naan",
          "options": [
              {
                  "name": "Supplement fromage",
                  "price": 1
              }
          ],
          "price": 6.50
      },
      {
          "id": 5,
          "preparationTimeSeconds": 300,
          "name": "Frites",
          "price": 2.50
      },
      {
          "id": 6,
          "preparationTimeSeconds": 300,
          "name": "Pakoras",
          "price": 3
      }
  ]

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Sandwishes addToBasket={jest.fn()} sandwishes={sandwishes}/>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
