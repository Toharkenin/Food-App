import {legacy_createStore as createStore} from 'redux';
import reducer from './cartReducer/index';

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
}