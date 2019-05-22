import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/header'
import AddToDo from './components/AddToDo'


class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: "Wash clothes",
        isdone: false
      },
      {
        id: 2,
        title: "Order dinner",
        isdone: false
      },
      {
        id: 3,
        title: "Book tickets",
        isdone: false
      },
    ]
  }

  markComplete = (id)=>{
    this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.isdone = !todo.isdone
    }
    return todo  
    })})
  }

  removeTask = (id)=>{
    this.setState({todos: this.state.todos.filter(todo => {
      if(todo.id != id){
        return true;
      }

    })})
  }

  render(){
    return(
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} removeTask={this.removeTask}/>
        <AddToDo/>
      </div>
    )
  }
}

export default App;
