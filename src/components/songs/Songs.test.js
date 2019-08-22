import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs component', () => {
  it('renders Songs', () => {
    const wrapper = shallow(<Songs songsArray={[{ songId:'sdsd44234', songTitle: 'ekkjnw' }, { songId:'sdsd44234', songTitle: '234234n' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
