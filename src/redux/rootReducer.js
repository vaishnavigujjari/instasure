import { combineReducers } from 'redux';
import linkReducer from './links/linkReducer';
import eventReducer from './company_events/eventReducer'

const rootReducer = combineReducers({
    link  : linkReducer,
    event : eventReducer
})

export default rootReducer