import { createStore } from 'redux';
import {commentReducer} from './reducers'
 
 
const persistedReducer = ({reducer: commentReducer})
 
export default () => {
  let store = createStore(persistedReducer)
  return { store }
}