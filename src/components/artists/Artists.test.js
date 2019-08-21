import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists component', () => {
  it('renders Artists', () => {
    const wrapper = shallow(<Artists artistArray={[{ artistId: '1231', artistName: 'name', artistDeets: 'they do stuff' }, { artistId: 'uiiuhh', artistName: 'someone', artistDeets: 'they did stuff too' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
