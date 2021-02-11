import React, { Component } from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import './App.scss';
import io  from 'socket.io-client';

const ENDPOINT = 'http://localhost:3000/';

const socket = io(ENDPOINT);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: [
        {id: 1, value: 'to do something'},
        {id: 2, value: 'to do something'},
        {id: 3, value: 'to do something'},
  
      ],
    };
  }

  componentDidMount() {
    
  }
  render() { 
    return ( 
      <MainLayout tasks={this.state.tasks} socket={socket}/>
    );
  }
}
 
export default App;
