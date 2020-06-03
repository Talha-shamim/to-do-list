import React, { Component } from 'react'
import './App.css';
import ListItems from './listItems';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      items: [],
      currentItem: {
        text : '',
        key: ''
      }
    }
    
  }


  handleInput=(e)=>{
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()  
      }
    })
  }


  addItem=(e)=>{
    e.preventDefault();
    const newItem=this.state.currentItem;
    if(newItem.text!==""){
      const newItems = [...this.state.items , newItem];
      this.setState({
        items: newItems,
        currentItem : {
          text:'',
          key: ''
        }
      })
    }
  }


  newpage=(e)=>{
    e.preventDefault();
    this.setState({
      items : []
    })
  }



  render(){
    return (
      <div className="App">
        <header>
        <form id="todoform" onSubmit={this.addItem}>
          <input type ="text" placeholder="Add New Item" value={this.state.currentItem.text}  onChange={this.handleInput}/>
          <button type ="submit">Add</button>
        </form>
      </header>
      <ListItems items={this.state.items}></ListItems>
      <button id="new" type="submit" onClick={this.newpage}>Delete All</button>
      </div>
    );
  }
}


export default App;