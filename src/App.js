import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/header'
import AddToDo from './components/AddToDo'
import About from './components/pages/about'
import uuid from 'uuid'
import axios from 'axios';


class App extends Component{
  state = {
    todos: [
    ]
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=40")
    .then(res => this.setState({todos: res.data}))
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
      if(todo.id !== id){
        return true;
      }
    })})
  }

  addToDo = (title) => {
    const newToDO = {
      id: uuid.v4(),
      title,
      isdone:false
    }
    this.setState({todos : [...this.state.todos, newToDO ]})
  }

  render(){
    return(
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
          <AddToDo addTask={this.addToDo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} removeTask={this.removeTask} />
          </React.Fragment>
          )}>
        </Route>
        <Route path="/about" component={About}>

        </Route>
      </div>
      </Router>
    )
  }
}

export default App;
