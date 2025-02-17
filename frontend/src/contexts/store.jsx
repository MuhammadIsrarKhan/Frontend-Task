import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

// Reducer function
const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedItemsAdd = [...state.items, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsAdd));
      return { ...state, items: updatedItemsAdd };
    }

    case "REMOVE_FROM_CART": {
      const updatedItemsRemove = state.items.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsRemove));
      return { ...state, items: updatedItemsRemove };
    }

    case "CLEAR_CART":
      localStorage.removeItem("cartItems");
      return { ...state, items: [] };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

// Create context
export const StoreContext = createContext();

// Context provider component
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Removed useStore function to a new file
