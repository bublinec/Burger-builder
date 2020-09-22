import React from 'react'; // for converting JS to createElement

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// jest is imported automatically when running test command
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem';

configure({adapter: new Adapter()});



describe('<NavigationItems />', () => {
    let wrapper;
    // run before each test
    beforeEach(() => {
        // shallow renders only the tested unit, not the whole tree of children elements,
        // these are replaced by placeholders
        wrapper = shallow(<NavigationItems />);
    })
    
    it('should render two <NavigationItems /> if not authentificated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('should render three <NavigationItems /> if authentificated', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })  
    it('should containt a log out link element if authentificated', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem href='/logout'>Log out</NavigationItem>)).toEqual(true);
    })
});