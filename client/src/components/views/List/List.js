import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './List.module.scss';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const removeTask = (params) => {
  console.log('remove task');
};
const addTask = (params) => {
  console.log('add Task');
};

const List = (props) => {
  // props.socket.on('newTask', () => {
  //   console.log('test');
  // });
  console.log(props);
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
            <Button variant='danger' onClick={removeTask}>Remove</Button>
          </div>
        </div>
        
          
      ))}
      <Form className={styles.container_basic}>
        <Form.Group controlId="formBasicEmail" className={styles.left_item}>
          <Form.Control type="email" placeholder="Add task" />
        </Form.Group>
        <div className={styles.button}>
          <Button variant="primary" onClick={addTask}>Add Task</Button>
        </div>
      </Form>
      
    </div>
  );
};
 
List.propTypes = {
  socket: PropTypes.object,
  tasks: PropTypes.array,
};
  
export default List;