import React, {Component} from 'react';

import { CardList } from './componentsNew/card-list/card-list.components';

import { SearchBox } from './componentsNew/search-box/search-box.components';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField: ""
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter (monster => monster.name.toLowerCase().includes (searchField.toLowerCase()) )
    return(
      <div className="App">
        <h1> Monsters Rolodex </h1>
      <SearchBox
          placeholder='search monsters' 
          handleChange={ e => this.setState({ searchField: e.target.value })}
      />
        <CardList monsters = {filteredMonsters} />
    </div>
    );
  } 
}

export default App;


