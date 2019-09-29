import { createStore, applyMiddleware } from 'redux'
import teamsReducer from './reducers/teams'
import thunk from 'redux-thunk'

let store = createStore(
    teamsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)
);

 export default store; 