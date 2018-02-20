import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';


import CardTableState from './CardTablereduser';


const rootReducer = combineReducers({
    CardTableState,
    routing
});

export default rootReducer;
