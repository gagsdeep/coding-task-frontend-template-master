import React, { Component } from 'react';
import '../App.css';
import AddCategory from './AddCategory';
import Header from './Header';
import CategoryList from './CategoryList';
import ErrorComponent from './ErrorComponent'

export default class KeywordManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: ''
    }
  }
  handleAddCategory = (item) => {
    if (item.error) {
      this.setState({ error: item.error })
    }
    else {
      let newObj = { id: item.id, data: item.data.getKeywords };
      let items = [...this.state.items, newObj];
      this.setState({ items: items })
    }
  }
  updateKeywords = (data, category) => {
    if (data.error) {
      this.setState({ error: data.error })
    }
    else {
      const { items } = this.state;
      this.state.items.forEach((e) => { if (e.id === category) e.data = data });
      this.setState({ items: items })
    }

  }
  render() {
    const { items, error } = this.state;
    if (error) {
      return (<ErrorComponent error={error} />)
    }
    else {
      return (
        <div className="main-container">
          <Header />
          <CategoryList items={items} updateKeywords={this.updateKeywords} />
          <AddCategory handleAddCategory={this.handleAddCategory} />
        </div>
      )
    }
  }
}
