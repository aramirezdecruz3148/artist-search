import React from 'react';
import { shallow } from 'enzyme';
import Releases from './Releases';

describe('Releases component', () => {
  it('renders Releases', () => {
    const wrapper = shallow(<Releases releaseArray={[{ releaseId: '1231', releaseTitle: 'name', releaseDate: 'Jan. 31st, 1987' }, { artistId: 'uiiuhh', artistName: 'someone', artistDeets: '5/8/13' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
