import { createStore, applyMiddleware, compose } from 'redux'
import teamsReducer from './reducers/teams'
import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(teamsReducer, composeEnhancer(applyMiddleware(thunk)));

 export default store; 