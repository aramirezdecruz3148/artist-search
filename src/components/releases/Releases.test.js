import React from 'react';
import { shallow } from 'enzyme';
import Releases from './Releases';

describe('Releases component', () => {
  it('renders Releases', () => {
    const wrapper = shallow(<Releases artistName='werwerw' releaseArray={[{ coverArtCount: true, releaseId: '1231', releaseTitle: 'name', releaseDate: 'Jan. 31st, 1987' }, { coverArtCount: true, releaseId: 'uiiuhh', releaseTitle: 'someone', releaseDate: '5/8/13' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
