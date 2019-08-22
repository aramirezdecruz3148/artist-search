import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs component', () => {
  it('renders Songs', () => {
    const wrapper = shallow(<Songs songId='sdsd44234' songsArray={[{ songTitle: 'ekkjnw' }, { songTitle: '234234n' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
