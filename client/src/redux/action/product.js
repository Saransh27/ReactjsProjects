import * as actionTypes from './actionTypes';
import axios from '../../axios-root';

const StoreProduct = (data) => {
    return {
        type: actionTypes.ADDPRODUCT,
        payload:{
            product:data.product
        }
    };
};

export const AddProduct = ( res ) => {
    return (dispatch, getState) => {
            dispatch(StoreProduct(res));
    }
};
const setProducts = ( productdata ) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload:{
            listProducts : productdata
        }
    };
};
export const initProducts = () => {
    return dispatch => {
        axios.get( 'http://localhost:5000/product' )
            .then( response => {
                console.log("inside initProduct action: ",response.data);
               dispatch(setProducts(response.data));
            } )
            .catch( error => {
                //dispatch(fetchProductsFailed());
                console.log("fetch failed");
            } );
    };
};