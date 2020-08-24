import {applyMiddleware,combineReducers,createStore} from 'redux'
import reducer from './reducer.jsx'
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// const logger = createLogger();

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
    
    );
export default store