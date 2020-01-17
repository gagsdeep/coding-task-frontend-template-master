import React from 'react';
import { mount } from 'enzyme';
import InputComponent from './InputComponent';



const find = (id, ref) => ref.find(`[id="${id}"]`).last();
const handleAddClick = jest.fn();
describe("InputComponent Component Tests", () => {
    it('renders without crashing', () => {
        const wrapper = mount(<InputComponent handleAddClick={handleAddClick} />);
        expect(wrapper)
            .not
            .toBeNull();
    });

    it('input box visibility', () => {
        const wrapper = mount(<InputComponent handleAddClick={handleAddClick} />);
        find('plus', wrapper).simulate('click');
        wrapper.update();
        expect(find('input', wrapper)).not
            .toBeNull();
    });

    it('Add button visibility', () => {
        const wrapper = mount(<InputComponent handleAddClick={handleAddClick} />);
        find('plus', wrapper).simulate('click');
        wrapper.update();
        expect(find('add', wrapper)).not
            .toBeNull();
    });
})