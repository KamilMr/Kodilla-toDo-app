import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './List.module.scss';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';



const List = ({tasks, updateState}) => {
  
  const removeTask = (taskId) => {
    const arrayTask = tasks;
    let index = arrayTask.map(task => task.id).indexOf(taskId);
    arrayTask.splice(index, 1);
    updateState(null, taskId);

    
    
  };

  const addTask = (event) => {
    event.preventDefault();
    let data = document.getElementById('formBasicEmail');
    if(data.value === ''){
      alert('Task is empty');
    } else{
      updateState([{id:uuid(), value: data.value}]);
      data.value = '';
    }
  };
  return ( 
    <div id="task-list">
      {/* task one */}
      {tasks.map(task => (
        <div className={styles.container} key={task.id}>
          <div className={styles.left_item}>
            <ul>
              <li className={styles.dot} id={task.id}>{task.value} </li>
            </ul>
          </div>
          <div className={styles.button}>
            <Button variant='danger' type="submit" onClick={() => removeTask(task.id)}>Remove</Button>
          </div>
        </div>
        
          
      ))}
      <Form className={styles.container_basic}>
        <Form.Group controlId="formBasicEmail" className={styles.left_item}>
          <Form.Control type="text" placeholder="Add task" />
        </Form.Group>
        <div className={styles.button}>
          <Button variant="primary" type="submit" onClick={addTask}>Add Task</Button>
        </div>
      </Form>
      
    </div>
  );
};
 
List.propTypes = {
  socket: PropTypes.object,
  tasks: PropTypes.array,
  updateState: PropTypes.func,
};
  
export default List;