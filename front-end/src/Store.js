import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { petfoodDetailReducer, petfoodListReducer } from './Reducer/PetFoodReducer';
import thuck from 'redux-thunk';
import { cartReducer } from './Reducer/CartReducer';
import { userRegisterReducer, userSigninReducer } from './Reducer/UserReducers';
import { orderCreateReducer } from './Reducer/OrderReducers';
const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethod: 'Momo',
    }
};
const reducer = combineReducers(
    {
        petfoodList: petfoodListReducer,
        petfoodDetail: petfoodDetailReducer,
        cart: cartReducer,
        userSignin: userSigninReducer,
        userRegister: userRegisterReducer,
        orderCreate: orderCreateReducer
    }
)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
    initialState,
    composeEnhancer(applyMiddleware(thuck)));

export default store;