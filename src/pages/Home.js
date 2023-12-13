import React, { useState, useEffect } from 'react';
import AddItemToKommands from '../Components/Buttons/AddItemToKommands';
import ReturnButton from '../Components/Buttons/ReturnButton';
import Banner from '../Components/ui/Banner';
import styles from './Home.module.css';
import laCarte from '../utils/laCarte';
import { Link } from 'react-router-dom';
import { useMyContext, ADD_PRODUCT } from '../context';
import KommandPreview from '../Components/ui/KommandPreview/KommandPreview';

const Home = () => {
  let [menu, setMenu] = useState('menu');
  const { addProduct } = useMyContext();
  const { data } = useMyContext();

  const handleAddProduct = (name) => {
    const newProduct = {
      id: Date.now(),
      name: name,
      quantity: 1,
      commentaire: '',
    };

    addProduct(newProduct);
    setMenu('menu');
    console.log(data);
  };

  useEffect(() => {
    console.log('Contenu du contexte :', data);
  }, [data]);

  switch (menu) {
    case 'menu':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            {Object.keys(laCarte).map((key, i) => (
              <div onClick={() => setMenu(key)}>
                <AddItemToKommands key={i}>{key}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'fooding':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.fooding.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'vins':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.vins.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'cocktails':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.cocktails.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'spritz':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.spritz.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'dry':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.dry.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'alcools':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools.map((product, i) => (
              <div
                key={i}
                onClick={() => setMenu(product[0])}
              >
                <AddItemToKommands>{product[0]}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Vodka':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[0].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Absolut':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[1].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Captain':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[2].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Havana':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[3].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Havana 7 ans':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[4].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case '3 rivières':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[5].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Zacapa':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[6].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Diplomatico':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[7].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Gin':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[8].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Tanqueray Ten':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[9].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Henricks':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[10].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case "Gin de l'Herbier":
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[11].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Briottet vert':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[12].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'JB':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[13].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Jameson':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[14].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Jack':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[15].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Jack Honey':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[16].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case "Ballantine's":
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[17].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Tequila':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[19].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Jager':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[18].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case "Bailey's":
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[20].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Martini':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[21].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Kir':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[22].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Lillet tonic':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[23].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Ice tropez':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[24].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Briottet blanc':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[25].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Ricard':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[26].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'Malibu':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.alcools[27].map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'bieres':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.bieres.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'softs':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.softs.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'mocktails':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.mocktails.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'champagne':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.champagne.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'BouteillesVins':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.BouteillesVins.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'BouteillesChamp':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.BouteillesChamp.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    case 'BouteilleAlcool':
      return (
        <div>
          <Banner />
          <div className={styles.Home}>
            <div onClick={() => setMenu('menu')}>
              <ReturnButton />
            </div>
            {laCarte.BouteilleAlcool.map((product, i) => (
              <div
                key={i}
                onClick={() => handleAddProduct(product)}
              >
                <AddItemToKommands>{product}</AddItemToKommands>
              </div>
            ))}
          </div>
          <Link to='/kommands'>
            <KommandPreview />
          </Link>
        </div>
      );
    default:
      return menu;
  }
};

export default Home;
