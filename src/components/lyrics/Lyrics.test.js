import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics artistName='werw' title='title' lyrics='lyrics' />);
    expect(wrapper).toMatchSnapshot();
  });
});
