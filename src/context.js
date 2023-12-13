import React, { useContext, useReducer } from 'react';

const Context = React.createContext();

export const useMyContext = () => useContext(Context);

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const CLEAR_CONTEXT = 'CLEAR_CONTEXT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return state.filter(
        (product) => product.name !== action.payload
      );
    case ADD_PRODUCT:
      const existingProduct = state.find(
        (product) => product.name === action.payload.name
      );

      if (existingProduct) {
        // Le produit existe déjà, mettez à jour la quantité
        const updatedState = state.map((product) =>
          product.name === action.payload.name
            ? {
                ...product,
                quantity:
                  product.quantity + (action.payload.quantity || 1),
              }
            : product
        );
        return updatedState;
      } else {
        // Le produit n'existe pas, ajoutez-le
        return [...state, action.payload];
      }
    case DECREASE_QUANTITY:
      return state
        .map((product) =>
          product.name === action.payload
            ? {
                ...product,
                quantity: Math.max(0, product.quantity - 1),
              }
            : product
        )
        .filter((product) => product.quantity > 0);
    case INCREASE_QUANTITY:
      return state.map((product) =>
        product.name === action.payload
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      );
    case CLEAR_CONTEXT:
      return [];
    case UPDATE_COMMENT:
      const { name, commentaire } = action.payload;

      return state.map((product) =>
        product.name === name
          ? { ...product, commentaire: commentaire }
          : product
      );
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, []);

  const addProduct = ({ id, name, quantity, commentaire }) => {
    const newProduct = {
      id,
      name,
      quantity,
      commentaire,
    };

    dispatch({ type: ADD_PRODUCT, payload: newProduct });
  };

  const updateComment = ({ name, commentaire }) => {
    dispatch({
      type: UPDATE_COMMENT,
      payload: { name, commentaire },
    });
  };

  return (
    <Context.Provider
      value={{ data, dispatch, addProduct, updateComment }}
    >
      {children}
    </Context.Provider>
  );
};
