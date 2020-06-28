import axios from 'axios'
import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CHECK_OUT
} from './Constans'

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(fetchProductsSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchProductsFailure(error.message))
            })
    }
}

export const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductsSuccess = users => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: users,

    }
}

export const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const addProduct = (id,item) => {

    return {
        type: ADD_PRODUCT,
        selectedProduct: {
            id:id,
            item: item,
            qty: 1
        }
    }
}

export const removeProduct = (id,item) => {
    return {
        type: REMOVE_PRODUCT,
        removeProduct: {
            id:id,
            item: item,
            qty: 1
        }
    }
}

export const checkout = () => {
    return {
        type: CHECK_OUT,

    }
}

