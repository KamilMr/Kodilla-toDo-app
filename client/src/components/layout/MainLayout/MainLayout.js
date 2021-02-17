import React from 'react';
import Header from '../Header/Header';
import List from '../../views/List/List';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';

const MainLayout = (props) => {
  return ( 
    <div>
      <Header />
      <List tasks={props.tasks} updateState={props.updateState}/>
    </div>
  );
};
 
MainLayout.propTypes = {
  socket: PropTypes.object,
  tasks: PropTypes.array,
  updateState: PropTypes.func,
};

export default MainLayout;