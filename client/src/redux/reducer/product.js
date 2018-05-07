import { updateObject,updateArray } from '../utility';
import * as actionTypes from '../action/actionTypes';

const initialState = {
    products: []
};
const addProduct = (state, action) => {
    var listProducts = state.products.slice().push(action.payload.product);
    var newState = {products:listProducts};
    return updateObject(state,newState);
};
const setProducts = (state, action) => {
    console.log("inside setproducts of product reducer");
    var listupdatedProducts = updateArray({}, action.payload.listProducts);
    var updatedState = {products:listupdatedProducts};
    return updateObject(state,updatedState);
};

const productreducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADDPRODUCT: return addProduct(state, action.payload.product);
        case actionTypes.SET_PRODUCTS: return setProducts(state, action);
        default: return state;
}};

export default productreducer;