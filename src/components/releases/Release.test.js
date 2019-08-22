import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release';

describe('Release component', () => {
  it('renders Release', () => {
    const wrapper = shallow(<Release releaseCover='string' releaseId='234j2h3b4j2' releaseDate='March 14th, 1988' releaseTitle='My life' />);
    expect(wrapper).toMatchSnapshot();
  });
});
