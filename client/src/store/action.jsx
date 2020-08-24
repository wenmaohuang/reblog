import api from '../api/index'
import store from './index.jsx'

import { createAction } from 'redux-actions'
const getArticleShow = api.getArticleShow

 const getArticle = () => {

    let action = (val) => ({
        type: "GET_ARTICLE",
        value: val
    })
    return (dispatch, getState) => {
        getArticleShow()
            .then((req, res) => {
                const data = req.data.data
                dispatch(action(data))
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export default getArticle