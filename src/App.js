import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      entries : [],
      searchField : ''
    }

    // this.handleChange = this.handleChange.bind(this); 
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({entries: data}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render () {
    const {entries, searchField} = this.state;
    const filteredEntries = entries.filter(entry => 
      entry.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">

        <SearchBox
          placeholder='Search Entries' 
          handleChange={this.handleChange}
        />

        <CardList 
          entries={filteredEntries} 
        /> 

      </div>
    )
  }
}

export default App;
