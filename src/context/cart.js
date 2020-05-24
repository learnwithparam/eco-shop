import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext({});

export const useCartStore = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Consumer should be wrapped inside the Provider");
  }

  return context;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const { id } = action.payload;
      const newState = [...state];
      const index = state.findIndex(cartItem => {
        return cartItem.id === id;
      });
      if (index > -1) {
        let quantity = newState[index].quantity + 1;
        if (quantity > 4) quantity = 4;
        newState[index] = {
          ...newState[index],
          quantity,
        };
      } else {
        newState.push({
          ...action.payload,
        });
      }
      return [...newState];
    }
    case "UPDATE": {
      const { id } = action.payload;
      const updatedItems = state.map(cartItem => {
        if (cartItem.id === id) {
          return {
            ...action.payload,
          };
        }
        return cartItem;
      });
      return [...updatedItems];
    }
    case "REMOVE": {
      const { id } = action.payload;
      const remainingItems = state.filter(cartItem => cartItem.id !== id);
      return [...remainingItems];
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = payload => {
    dispatch({ type: "ADD", payload });
  };

  const removeFromCart = payload => {
    dispatch({ type: "REMOVE", payload });
  };

  const updateCart = payload => {
    dispatch({ type: "UPDATE", payload });
  };

  const context = {
    cart,
    addToCart,
    updateCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
