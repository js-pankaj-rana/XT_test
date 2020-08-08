import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {Chart} from './../../components/chart';



test('Chart component snapshot testing', () => {

      const component = ReactTestRenderer.create(
        <Chart  />
      );
    
    let tree = component.toJSON();
   
      expect(tree).toMatchSnapshot();
})
