import { PETFOOD_DETAIL_FAIL, PETFOOD_DETAIL_REQUEST, PETFOOD_DETAIL_SUCCESS, PETFOOD_LIST_FAIL, PETFOOD_LIST_REQUEST, PETFOOD_LIST_SUCCESS } from "../Constants/PetFoodContants"
import Axios from 'axios';
export const listPetFood = () => async (dispatch) => {
    dispatch({
        type: PETFOOD_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/products');
        dispatch({ type: PETFOOD_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: PETFOOD_LIST_FAIL, payload: error.message })
    }
};

export const detailPetFood = (productId) => async (dispatch) => {
    dispatch({
        type: PETFOOD_DETAIL_REQUEST, payload: productId
    });
    try {
        const { data } = await Axios.get(`/api/products/${productId}`);
        dispatch({ type: PETFOOD_DETAIL_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: PETFOOD_DETAIL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message,
        })
    }
}