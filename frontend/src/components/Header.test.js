import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';


const onSelect = jest.fn();
const find = (id, ref) => ref.find(`[id="${id}"]`).last();
describe("Header Component Tests", () => {
    it('renders without crashing', () => {
        const wrapper = mount(<Header />);
        expect(wrapper)
            .not
            .toBeNull();
    });

    it('length of rows', () => {
        const wrapper = mount(<Header />);
        const rowDivs = wrapper.find('#row');
        expect(rowDivs.length).toBe(1);
    });

    it('length of column', () => {
        const wrapper = mount(<Header />);
        const text = find('column1', wrapper).text()
        expect(text).toBe("Categories");
    });

})