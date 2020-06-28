import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CHECK_OUT
} from './Constans'

const initialState = {
    loading: false,
    product: [],
    error: '',
    totalOrder: 0,
    selectedProduct: []
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
                totalOrder: 0
            }

        case ADD_PRODUCT:

            return {
                ...state,
                totalOrder: state.totalOrder + 1,
                selectedProduct: state.selectedProduct.concat(action.selectedProduct)

            }

        case REMOVE_PRODUCT:

            if (state.totalOrder > 0) {

                let filtered_product = state.selectedProduct;
                // get index of object with id:37
                console.log("test reducer")

                let removeIndex = filtered_product.map(function (item) {
                    return item.id;
                }).indexOf(action.removeProduct.id);
                filtered_product.splice(removeIndex, 1);

                return {
                    ...state,
                    totalOrder: state.totalOrder - 1,
                    selectedProduct: filtered_product

                }
            }

        case  CHECK_OUT:
            console.log("checkout test")
            return {
                ...state,
                totalOrder: 0,
                selectedProduct: []
            }

        default:
            return state
    }
}

export default ProductReducer
