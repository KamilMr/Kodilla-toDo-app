import React, { Component } from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import './App.scss';
import io  from 'socket.io-client';
import uuid from 'react-uuid';


const ENDPOINT = 'http://localhost:8000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [
        {id: uuid(), value: 'Hello'},
      ],
    };
  }
  
  async componentDidMount() {
    this.socket = io(ENDPOINT);
    this.socket.emit('newTask', this.state.tasks);
    this.socket.on('updateData', (newTasks) => this.setState({tasks: [...this.state.tasks, ...newTasks]}));
    this.socket.on('removeTask', (newTasks) => this.setState({tasks: [...newTasks]}));
  }
  
  updateState =(newTask, removedTaskId) => {
    if(newTask != null){
      this.setState({tasks: [...this.state.tasks, ...newTask]});
      this.socket.emit('newTask',newTask);
    }else {
      this.setState({tasks: [...this.state.tasks]});
      this.socket.emit('removeTask',removedTaskId);
    }
  }
  


  
  
  render() { 
    return ( 
      <div>
        <MainLayout tasks={this.state.tasks} store={this.state} updateState = {this.updateState}/>
      </div>
    );
  }
}
 
export default App;
