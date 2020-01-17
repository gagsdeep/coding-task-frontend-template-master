import React, { Component } from 'react';
import InputComponent from './InputComponent';
import { UPDATE_ITEM } from '../service/mutationService'
import { Mutation } from 'react-apollo';

export default class CategoryList extends Component {

    constructor(props) {
        super(props);
    }

    handleAddClick = async (inputValue, updateKeyword, category) => {
        const { updateKeywords } = this.props;
        try {
            const data = await updateKeyword({ variables: { category, keyword: inputValue } })
            updateKeywords(data.data.updateKeyword, category);
        }
        catch (error) {
            updateKeywords({ error }, category);
        }
    }
    render() {
        const { items } = this.props;
        return (
            <Mutation mutation={UPDATE_ITEM} >
                {(updateKeyword) => (
                    items.map((item, index) => (
                        <div className="row" key={index}>
                            <div className="column-first">
                                {item.id}
                            </div>
                            <div className="column right-divider" key={item.id}>
                                {item && item.data && item.data.map(({ word }) => word).join(',')}
                                <InputComponent handleAddClick={(inputValue) =>
                                    this.handleAddClick(inputValue, updateKeyword, item.id)

                                } />
                            </div>
                        </div>
                    )
                    ))}
            </Mutation>
        )
    }
}