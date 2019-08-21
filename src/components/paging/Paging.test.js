import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('Paging component', () => {
  it('renders Paging', () => {
    const wrapper = shallow(<Paging onClickPrevious={() => {}} onClickNext={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
