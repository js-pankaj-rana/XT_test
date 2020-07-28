import React from 'react';
import renderer from 'react-test-renderer';
import {Chart} from './../../components/chart';


test('Chart component snapshot testing', () => {
      const component = renderer.create(
        <Chart  />
      );
    
    let tree = component.toJSON();
    
      expect(tree).toMatchSnapshot();
})
