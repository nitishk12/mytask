import { createStore, combineReducers, applyMiddleware } from 'redux';
import usersReducer from './reducers/userReducer';

const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,

    }), applyMiddleware())
    return store
}
export default configureStore