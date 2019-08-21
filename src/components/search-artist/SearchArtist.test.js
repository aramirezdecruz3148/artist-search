import React from 'react';
import { shallow } from 'enzyme';
import SearchArtist from './SearchArtist';

describe('SearchArtist component', () => {
  it('renders SearchArtist', () => {
    const wrapper = shallow(<SearchArtist artist='me' onButtonClick={() => {}} onInputChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
