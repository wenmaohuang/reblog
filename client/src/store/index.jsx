import {applyMiddleware,combineReducers,createStore} from 'redux'
import {reduceArticle} from './reducer.jsx'

import thunk from 'redux-thunk';

const store = createStore(reduceArticle,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
    
    );
export default store