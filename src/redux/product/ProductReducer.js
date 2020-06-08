import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from './Constans'

const initialState = {
    loading: false,
    product: [],
    error: '',
    totalOrder:0,
    selectedProduct:[]
}

const ProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,

            }

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: '',

            }

        case FETCH_PRODUCT_FAILURE:
            return {
                loading: false,
                product: [],
                error: action.payload,
                totalOrder:0
            }

        case ADD_PRODUCT:

            return {
                ...state,
                totalOrder : state.totalOrder + 1,
                selectedProduct:state.selectedProduct.concat(action.selectedProduct)

            }

        case REMOVE_PRODUCT:

            if(state.totalOrder > 0){
                return {
                    ...state,
                    totalOrder : state.totalOrder - 1
                }
            }

        default: return state
    }
}

export default ProductReducer
