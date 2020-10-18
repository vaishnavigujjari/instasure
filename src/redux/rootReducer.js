import { combineReducers } from 'redux';
import linkReducer from './links/linkReducer';

const rootReducer = combineReducers({
    link: linkReducer
})

export default rootReducer