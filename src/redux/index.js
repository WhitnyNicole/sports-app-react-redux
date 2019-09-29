import { createStore } from 'redux'
import teamsReducer from './reducers/teams'

let store = createStore(
    teamsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 export default store; 