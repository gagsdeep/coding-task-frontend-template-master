import React from 'react';
import { mount } from 'enzyme';
import AddCategory from './AddCategory';
import { MockedProvider } from 'react-apollo/test-utils';
import { GET_KEYWORDS } from '../service/queryService';
import wait from 'waait';

const mocks = [{
    request: {
        query: GET_KEYWORDS,
        variables: {
            category: 'cow'
        }
    },
    result: {
        data: {
            getKeywords: [{ word: 'dung' }]
        }
    }
}]
const find = (id, ref) => ref.find(`[id="${id}"]`).last();
const change = (ref, name, value) => find(name, ref).simulate('change', { target: { value } });

describe("Calling Add Category Tests", () => {

    it('renders without crashing', async () => {

        const handlers = {
            handleAddCategory: jest.fn(),
            handleCategoryClick: jest.fn()
        }
        const wrapper = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <AddCategory {...handlers} />
            </MockedProvider>
        );

        expect(wrapper).not.toBeNull();

    });
    it('mocked graphQl call', async () => {

        const handlers = {
            handleAddCategory: jest.fn()
        }
        const wrapper = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <AddCategory {...handlers} />
            </MockedProvider>
        );

        expect(wrapper).not.toBeNull();

        find('plus', wrapper).simulate('click');
        find('input', wrapper).simulate('change', { target: { value: 'cow' } });
        find('add', wrapper).simulate('click');

        await wait(200);
        wrapper.update();

        expect(handlers.handleAddCategory).toHaveBeenCalledTimes(1);
        expect(handlers.handleAddCategory).toHaveBeenCalledWith({
            id: 'cow',
            data: {
                getKeywords: [{ word: 'dung' }]
            }
        })

    });


})