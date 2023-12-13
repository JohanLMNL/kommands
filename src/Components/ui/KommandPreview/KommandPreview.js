import React from 'react';
import styles from './KommandPreview.module.css';
import { useMyContext } from '../../../context';

const KommandPreview = () => {
  const { data } = useMyContext();
  const nombreProduits = data.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className={styles.Footer}>{nombreProduits} Produits</div>
  );
};

export default KommandPreview;
