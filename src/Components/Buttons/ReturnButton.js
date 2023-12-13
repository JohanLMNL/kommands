import React from 'react';
import styles from './ReturnButton.module.css';
import CircumIcon from '@klarr-agency/circum-icons-react';

const ReturnButton = (props) => {
  return (
    <div className={styles.returnButton}>
      <CircumIcon name='circle_chev_left' />
    </div>
  );
};

export default ReturnButton;
