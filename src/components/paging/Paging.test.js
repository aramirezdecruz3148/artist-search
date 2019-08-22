import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';

describe('Paging component', () => {
  it('renders Paging', () => {
    const wrapper = shallow(<Paging onClickPrevious={() => {}} onClickNext={() => {}} disableNext={9} disablePrev={9} currentPage={10} totalPages={3}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
