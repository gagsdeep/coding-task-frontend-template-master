import React from 'react';

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputAvailable: false,
            inputValue: ''
        }
    }
    handleChange = (value) => {
        this.setState({
            inputValue: value
        })

    }
    toggleComponent = () => {
        this.setState({ isInputAvailable: !this.state.isInputAvailable })
    }

    handleClickOnAddButton = (inputValue) => {
        this.setState({ isInputAvailable: !this.state.isInputAvailable })
        if (inputValue)
            this.props.handleAddClick(inputValue)
    }
    render() {
        const { inputValue, isInputAvailable } = this.state;
        return (
            <React.Fragment>
                {!isInputAvailable && <span id="plus" onClick={(e) => this.toggleComponent()}><b>+</b></span>}
                {isInputAvailable && <input id="input" type="text" placeholder="Please enter your keyword" onChange={(e) => this.handleChange(e.target.value)}></input>}
                {isInputAvailable && <button onClick={(e) => {
                    this.handleClickOnAddButton(inputValue)
                }} id="add">Add</button>
                }
            </React.Fragment>

        );
    }
}