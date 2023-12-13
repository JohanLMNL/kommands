import React, { useRef, useState } from 'react';
import { formatDate } from './utils/formatDate';

const ThermalPrinter = () => {
  const [printerIPAddress, setPrinterIPAddress] =
    useState('192.168.1.102');
  const [printerPort, setPrinterPort] = useState('8008');
  const [textToPrint, setTextToPrint] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');
  const [table, setTable] = useState('');

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
      alert("Pas connecté à l'imprimante !");
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
    prn.addTextSize(1, 1);

    prn.addFeedLine(2);

    prn.addTextAlign(prn.ALIGN_CENTER);
    prn.addText(formatDate());
    prn.addFeedLine(2);

    prn.addCut(prn.CUT_FEED);

    prn.send();
  };

  return (
    <div id='thermalPrinter'>
      <input
        id='printerIPAddress'
        placeholder='Printer IP Address'
        value={printerIPAddress}
        onChange={(e) => setPrinterIPAddress(e.currentTarget.value)}
      />
      <input
        id='printerPort'
        placeholder='Printer Port'
        value={printerPort}
        onChange={(e) => setPrinterPort(e.currentTarget.value)}
      />
      <button
        disabled={connectionStatus === STATUS_CONNECTED}
        onClick={() => connect()}
      >
        Connect
      </button>
      <span className='status-label'>{connectionStatus}</span>
      <hr />

      <input
        type='text'
        placeholder='Table n°'
        onChange={(e) => setTable(e.currentTarget.value)}
      />
      <button
        disabled={connectionStatus !== STATUS_CONNECTED}
        onClick={() => print(textToPrint)}
      >
        Print
      </button>
    </div>
  );
};

export default ThermalPrinter;
