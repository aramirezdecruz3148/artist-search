import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics title='title' lyrics='lyrics' />);
    expect(wrapper).toMatchSnapshot();
  });
});
