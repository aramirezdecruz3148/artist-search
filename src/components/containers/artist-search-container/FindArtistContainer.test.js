import React from 'react';
import { shallow } from 'enzyme';
import FindArtistContainer from './FindArtistContainer';

describe('FindArtistContainer component', () => {
  it('renders FindArtistContainer', () => {
    const wrapper = shallow(<FindArtistContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
