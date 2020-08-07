import React from 'react';
import renderer from 'react-test-renderer';
import NewsHeaderMemo from './../../components/newsHeader';

describe("NewsHeaderMemo component testing", () => {
    const component = renderer.create(
        <NewsHeaderMemo />,
      );

    test('NewsHeaderMemo component snapshot testing', () => {
        let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    })
})




