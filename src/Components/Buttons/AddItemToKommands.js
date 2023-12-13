import React from 'react';
import styles from './AdditemToKommans.module.css';

const AddItemToKommands = (props) => {
  return (
    <div
      className={styles.addItemButton}
    >
      {props.children}
    </div>
  );
};

export default AddItemToKommands;
