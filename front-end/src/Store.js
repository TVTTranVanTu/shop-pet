import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { petfoodDetailReducer, petfoodListReducer } from './Reducer/PetFoodReducer';
import thuck from 'redux-thunk';
import { cartReducer } from './Reducer/CartReducer';
const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    }
};
const reducer = combineReducers(
    {
        petfoodList: petfoodListReducer,
        petfoodDetail: petfoodDetailReducer,
        cart: cartReducer
    }
)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    initialState,
    composeEnhancer(applyMiddleware(thuck)));

export default store;