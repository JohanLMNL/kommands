import React from 'react';

import CircumIcon from '@klarr-agency/circum-icons-react';
import styles from './AfficherElementKommands.module.css';

const AfficherElementKommand = (props) => {
  return (
    <tr className={styles.element}>
      <td
        className={styles.cellG}
        onClick={props.decrease}
      >
        <CircumIcon name='circle_minus' />
      </td>
      <td>
        <p>{props.qty}</p>
      </td>
      <td
        className={styles.cellG}
        onClick={props.add}
      >
        <CircumIcon name='circle_plus' />
      </td>
      <td>
        <p>{props.name}</p>
      </td>
      <td
        className={styles.cellR}
        onClick={props.delete}
      >
        <CircumIcon name='circle_remove' />
      </td>
      <td
        className={styles.cellB}
        onClick={props.comment}
      >
        <CircumIcon name='chat_1' />
      </td>
      <td className={styles.commentaire}>{props.commentaire}</td>
    </tr>
  );
};

export default AfficherElementKommand;
