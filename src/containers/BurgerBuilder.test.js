import React, { Fragment } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BurgerBuilder from './BurgerBuilder';
import Spinner from '../components/UI/Spinner';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder />);
    });
    it('should render <Spinner /> if not receiving ingredients', () => {
        wrapper.setProps({ingredients: null});
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });

});