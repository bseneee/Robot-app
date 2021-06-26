import React, { Component } from 'react'
import {CardList} from './components/card-list/index';
import  './App.style.css'
import { SearchBox } from './components/search-box';

export default  class App extends Component{
  constructor(){
    super();
    this.state={
      robots: [],
      searchField:"",
    }
  }


  onSearchChanged=event=>{
    console.log(event.target.value);
    this.setState({searchField: event.target.value});
  }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users').then(e=>e.json()).then(arr=>this.setState({robots: arr })).catch(err=>console.log(err));
  }


  render(){
    const {robots, searchField}=this.state;
    const filterSearchField= robots.filter(robot=>robot.name.toLowerCase().includes(searchField));
    
    return (
        <div class="App">
            <h1>Роботуудын жагсаалт</h1>
            <SearchBox onSearch={this.onSearchChanged}/>
            <CardList robots={filterSearchField}/> 
        </div>
    );
  }

}