import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return ( 
    <div className={styles.component}>
      <div className={styles.center}>
        <h1>To Do App</h1>
      </div>
    </div>
  );
};
 
export default Header;