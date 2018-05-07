import { updateObject,updateArray } from '../utility';
import * as actionTypes from '../action/actionTypes';

const initialState = {
    products: []
};
const setProducts = (state, action) => {
    var listupdatedProducts = updateArray({}, action.payload.listProducts);
    console.log("inside auth reducer");
    var updatedState = {products:listupdatedProducts};
    return updateObject(state,updatedState);
};

const authreducer = ( state = initialState, action ) => {
    // switch ( action.type ) {
    //     case actionTypes.SET_PRODUCTS: return setProducts(state, action);
    //     default: return state;
//}
return state;
};

export default authreducer;