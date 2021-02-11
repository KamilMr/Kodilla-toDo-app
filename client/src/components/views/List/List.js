import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './List.module.scss';
import PropTypes from 'prop-types';

const removeTask = (params) => {
  console.log('Hey');
};

const List = (props) => {
  props.socket.on('newTask', () => {
    console.log('test');
  });
  return ( 
    <div id="task-list">
      {/* task one */}
      {props.tasks.map(task => (
        <div className={styles.container} key={task.id}>
          <div className={styles.left_item}>
            <ul>
              <li className={styles.dot}>{task.value} </li>
            </ul>
          </div>
          <div className={styles.button}>
            <Button variant='success' onClick={removeTask}>Remove</Button>
          </div>
        </div>
          
      ))}
    </div>
  );
};
 
List.propTypes = {
  socket: PropTypes.object,
  tasks: PropTypes.array,
};
  
export default List;