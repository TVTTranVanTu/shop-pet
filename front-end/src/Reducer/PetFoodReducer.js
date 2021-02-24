import {
    PETFOOD_DETAIL_FAIL,
    PETFOOD_DETAIL_REQUEST,
    PETFOOD_DETAIL_SUCCESS,
    PETFOOD_LIST_FAIL,
    PETFOOD_LIST_REQUEST,
    PETFOOD_LIST_SUCCESS
} from "../Constants/PetFoodContants";

export const petfoodListReducer = (
    state = { loading: true, products: [] },
    action
) => {
    switch (action.type) {
        case PETFOOD_LIST_REQUEST:
            return { loading: true }
        case PETFOOD_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PETFOOD_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};

export const petfoodDetailReducer = (
    state = { product: {}, loading: true },
    action
) => {
    switch (action.type) {
        case PETFOOD_DETAIL_REQUEST:
            return { loading: true }
        case PETFOOD_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
        case PETFOOD_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};