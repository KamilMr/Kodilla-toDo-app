import React, { Component } from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import './App.scss';
import io  from 'socket.io-client';

const ENDPOINT = 'http://localhost:8000';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [
        {id: 1, value: 'Buy Bread'},
        {id: 2, value: 'clean room'},
        {id: 3, value: 'listen to music'},
  
      ],
    };
  }
  
  
  componentDidMount() {
    this.socket = io(ENDPOINT);
    this.socket.on('newTask', () => {
      console.log('Hello');
    });
  }

  
  render() { 
    return ( 
      <MainLayout tasks={this.state.tasks}/>
    );
  }
}
 
export default App;
