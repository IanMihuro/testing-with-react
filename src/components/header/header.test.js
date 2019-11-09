import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from './index';
import {findByTestAttr} from '../../Utils/index';

configure({adapter: new Adapter()});



const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

// const findByTestAttr = (component, attr) => {
//     const wrapper = component.find(`[data-test='${attr}']`);
//     return wrapper;
// } // exported

describe('Header Component', ()=> {
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    it('Should render without errors', ()=>{
        
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1);
    })
    it('Should render a logo', ()=>{
        
        const wrapper = findByTestAttr(component, 'logoIMG');
        expect(wrapper.length).toBe(1);
    })
});