import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const ADD_TO_CART = 'ADD_TO_CART';
const INITIAL_STATE = {
  cartList: [],
}

export const add_to_cart = (product) => ({
  type: ADD_TO_CART,
  product,
});

const rootReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.product],
      }
    default:
      return state;
  }
};

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

