import api from '../api/index'

const getArticleShow = api.getArticleShow

export const getArticleOption = () => {

    let action = (val) => ({
        type: "GET_ARTICLE_OPTION",
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

export const getArticle = () => {

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


