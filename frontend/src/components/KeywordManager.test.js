import React from 'react';
import { shallow } from 'enzyme';
import KeywordManager from './KeywordManager';



const find = (id, ref) => ref.find(`[id="${id}"]`).last();

describe("KeywordManager Component Tests", () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<KeywordManager />);
        expect(wrapper)
            .not
            .toBeNull();
    });
})