import React from 'react';
import Header from '../Header/Header';
import List from '../../views/List/List';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';

const MainLayout = (props) => {
  console.log(props);
  return ( 
    <div>
      <Header />
      <List tasks={props.tasks} socket={props.socket}/>
    </div>
  );
};
 
MainLayout.propTypes = {
  socket: PropTypes.object,
  tasks: PropTypes.array,
};

export default MainLayout;