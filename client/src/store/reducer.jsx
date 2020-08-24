import api from '../../src/api'

import getArticle from './action'

import { handleActions } from 'redux-actions'

let defaultState = {
    article: null
}




export default function reduceArticle(state = defaultState, action) {

    switch (action.type) {
        case 'GET_ARTICLE':
            return {...state,article:action.value}
        default:
            return state;
    }
    

}