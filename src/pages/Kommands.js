import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AfficherElementKommand from '../Components/AfficherElementKommand';
import { formatDate } from '../utils/formatDate';
import toast, { Toaster } from 'react-hot-toast';

import styles from './Kommands.module.css';
import CircumIcon from '@klarr-agency/circum-icons-react';
import Banner from '../Components/ui/Banner';

import {
  useMyContext,
  DELETE_PRODUCT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  CLEAR_CONTEXT,
} from '../context';

const Kommands = () => {
  const { data, dispatch, updateComment } = useMyContext();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  const [commentName, setCommentName] = useState('');
  const [comment, setComment] = useState('');
  const [table, setTable] = useState('');

  //GESTION MODAL

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // GESTION MODAL 2

  const commentHandler = (name) => {
    setModal2Open(true);
    setCommentName(name);
  };
  // GESTION TOAST
  const notify = () => toast('Here is your toast.');
  // GESTION PANIER
  const supprimerProduit = (name) => {
    dispatch({ type: DELETE_PRODUCT, payload: name });
  };

  const diminuerQuantite = (name) => {
    dispatch({ type: DECREASE_QUANTITY, payload: name });
  };

  const augmenterQuantite = (name) => {
    dispatch({ type: INCREASE_QUANTITY, payload: name });
  };

  const clearContext = () => {
    dispatch({ type: CLEAR_CONTEXT });
  };

  const handleCommentUpdate = (name, newCommentaire) => {
    updateComment({ name, commentaire: newCommentaire });
    console.log(commentName);
    console.log(data);
    setModal2Open(false);
  };

  // GESTION PRINTER

  const [printerIPAddress, setPrinterIPAddress] =
    useState('192.168.1.25');
  const [printerPort, setPrinterPort] = useState('8008');
  const [textToPrint, setTextToPrint] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');

  const ePosDevice = useRef();
  const printer = useRef();
  const STATUS_CONNECTED = 'Connected';

  const connect = () => {
    setConnectionStatus('Connecting ...');

    if (!printerIPAddress) {
      setConnectionStatus('Type the printer IP address');
      return;
    }
    if (!printerPort) {
      setConnectionStatus('Type the printer port');
      return;
    }

    setConnectionStatus('Connecting ...');

    let ePosDev = new window.epson.ePOSDevice();
    ePosDevice.current = ePosDev;

    ePosDev.connect(printerIPAddress, printerPort, (data) => {
      if (data === 'OK') {
        ePosDev.createDevice(
          'local_printer',
          ePosDev.DEVICE_TYPE_PRINTER,
          { crypto: true, buffer: false },
          (devobj, retcode) => {
            if (retcode === 'OK') {
              printer.current = devobj;
              setConnectionStatus(STATUS_CONNECTED);
            } else {
              throw retcode;
            }
          }
        );
      } else {
        throw data;
      }
    });
  };

  const print = (text) => {
    let prn = printer.current;
    if (!prn) {
      alert("Pas connecté à l'imprimante");
      return;
    }

    prn.addFeedLine(1);

    prn.addTextAlign(prn.ALIGN_CENTER);
    prn.addText('Table n°');
    prn.addFeedLine(1);
    prn.addTextSize(3, 3);
    prn.addTextStyle('reverse');
    prn.addText(' ' + table + ' ');
    prn.addFeedLine(3);

    prn.addTextStyle(false);
    prn.addTextAlign(prn.ALIGN_LEFT);
    prn.addTextSize(2, 2);
    prn.addText(stringifyContext(data));
    prn.addFeedLine(2);

    prn.addTextAlign(prn.ALIGN_CENTER);
    prn.addTextSize(1, 1);
    prn.addText(formatDate());
    prn.addFeedLine(2);
    prn.addCut(prn.CUT_FEED);

    prn.send();
  };

  //GESTION IMPRESSION
  const stringifyContext = (context) => {
    const productStrings = context.map((product) => {
      if (product.commentaire !== '') {
        return `${product.quantity} ${product.name}\n\t${product.commentaire}\n`;
      } else {
        return `${product.quantity} ${product.name}\n`;
      }
    });

    return productStrings.join('');
  };
  const printHandler = () => {
    connect();
    setTimeout(() => {
      print();
    }, 2000);
    setModalOpen(false);
    clearContext();
    notify();
    navigate('/');
  };

  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <table className={styles.table}>
          <tr>
            {data.map((product) => (
              <AfficherElementKommand
                qty={product.quantity}
                name={product.name}
                decrease={() => diminuerQuantite(product.name)}
                add={() => augmenterQuantite(product.name)}
                delete={() => supprimerProduit(product.name)}
                comment={() => commentHandler(product.name)}
                commentaire={product.commentaire}
              />
            ))}
          </tr>
        </table>
      </div>
      <div className={styles.buttonGroup}>
        <Link to='/'>
          <div className={styles.returnButton}>
            <CircumIcon name='circle_chev_left' />
          </div>
        </Link>

        <div
          className={styles.checkButton}
          onClick={openModal}
        >
          <CircumIcon name='circle_check' />
        </div>
      </div>
      {/* Ajout de la modale */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span
              onClick={closeModal}
              className={styles.close}
            >
              &times;
            </span>
            <h2>Table n°</h2>
            <input
              className={styles.input}
              type='number'
              placeholder='Numéro de table'
              onChange={(e) => setTable(e.target.value)}
            />
            <div className={styles.buttonGroup}>
              <div
                className={styles.returnButton}
                onClick={closeModal}
              >
                <CircumIcon name='circle_chev_left' />
              </div>

              <div
                className={styles.checkButton}
                onClick={() => printHandler()}
              >
                <CircumIcon name='paperplane' />
              </div>
            </div>
          </div>
        </div>
      )}

      {isModal2Open && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span
              onClick={() => setModal2Open(false)}
              className={styles.close}
            >
              &times;
            </span>
            <h2>Commentaire :</h2>
            <input
              className={styles.input}
              type='text'
              placeholder='commentaire'
              onChange={(e) => setComment(e.target.value)}
            />
            <div className={styles.buttonGroup}>
              <div
                className={styles.returnButton}
                onClick={() => setModal2Open(false)}
              >
                <CircumIcon name='circle_chev_left' />
              </div>

              <div
                className={styles.checkButton}
                onClick={() =>
                  handleCommentUpdate(commentName, comment)
                }
              >
                <CircumIcon name='paperplane' />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kommands;
