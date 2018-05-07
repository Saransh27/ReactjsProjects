import { combineReducers} from 'redux';
import authreducer from './auth';
import  productreducer from './product';


const rootReducer = combineReducers({
    product: productreducer,
    auth: authreducer
});

export default rootReducer;