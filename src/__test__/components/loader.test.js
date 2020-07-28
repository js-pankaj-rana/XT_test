import React from 'react';
import renderer from 'react-test-renderer';
import {Loader} from './../../components/Loader';

test('Loader component snapshot testing', () => {
    const component = renderer.create(
        <Loader />,
      );
    
    let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
   

})


