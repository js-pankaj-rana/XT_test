import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {Chart} from './../../components/chart';



test('Chart component snapshot testing', () => {

  let chartData = [
      {"name":"16582136","vote":6015},
      {"name":"11116274","vote":5771},
      {"name":"3078128","vote":4271},
      {"name":"13682022","vote":4107},
      {"name":"23065782","vote":3816},
      {"name":"22107823","vote":3592},
      {"name":"15924794","vote":3384},
      {"name":"3742902","vote":3381},
      {"name":"20052623","vote":3287}
      ];

      console.log("renderer", ReactTestRenderer);

      const component = ReactTestRenderer.create(
        <Chart chartData={ chartData } />
      );
    
    let tree = component.toJSON();
   
      expect(tree).toMatchSnapshot();
})
