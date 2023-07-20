import { createStore } from 'redux';
import cartReducer from './UserSlice';

const store = createStore(cartReducer);

export default store;