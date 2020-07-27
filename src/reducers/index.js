import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import  {commentReducer} from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [commentReducer]
}

const rootReducer = combineReducers({
    commentReducer
})

export default persistReducer(persistConfig, rootReducer)
