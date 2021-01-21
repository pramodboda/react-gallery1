import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.components';


class App extends Component {
  constructor(state) {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      return response.json()
    })
    .then((users) => this.setState({monsters: users}))
  }
  

  handleChange = (e) => this.setState({searchField: e.target.value})

  render() {

    const {monsters, searchField} = this.state;
    const filtersMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className="App">
        <h1 className="page-title">Gallery</h1>
        <SearchBox placeholder="Search Author" handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filtersMonsters}/>
      </div>
    );
  }
}

export default App;
