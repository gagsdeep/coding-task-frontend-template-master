import { ApolloConsumer } from 'react-apollo';
import { GET_KEYWORDS } from '../service/queryService';
import React from 'react';
import InputComponent from './InputComponent';


export default class AddCategory extends React.Component {
    handleAddClick = async (client, inputValue) => {
        const { handleAddCategory } = this.props;
        try {
            const { data } = await client.query({
                query: GET_KEYWORDS,
                variables: {
                    category: inputValue
                }
            });

            handleAddCategory({ id: inputValue, data: data });
        } catch (err) {
            handleAddCategory({ id: inputValue, error: err })
        }

    }
    render() {
        return (
            <ApolloConsumer>
                {client => (
                    <div className="row">
                        <div className="column-category">
                            <span><b>Add Categories</b></span>
                            <InputComponent handleAddClick={(inputValue) => this.handleAddClick(client, inputValue)} />
                        </div>
                    </div>

                )}
            </ApolloConsumer>
        );
    }
}