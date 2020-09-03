import store from "./index";

let defaultState = {
    articleOption: null,
    article: null,
    articleDetail: null
}


export function reduceArticle(state = defaultState, action) {
    switch (action.type) {
        case 'GET_ARTICLE_OPTION':
            var arr = []
            var obj = {
                key: '1',
                title: 'Edward King 1',
                type: '',
                tag: '32',
                content: 'London, Park Lane no. 1',
            }
            var newArr = function () {
                action.value.forEach((item, index) => {
                    var newObj = JSON.parse(JSON.stringify(obj))
                    var text = ''

                    newObj.type = item.type
                    newObj.tag = item.tag
                    item.content.blocks.forEach(item => {
                        text += item.text + '\n'
                    })
                    newObj.content = text
                    newObj.title = item.title
                    newObj.key = index
                    arr.push(newObj)
                })
                return arr
            }
            var newState = newArr()


            return {...state, articleOption: action.value, article: newState}
        case 'GET_ARTICLE_DETAIL':
            console.log(action,'fg');
            return {
                ...state, articleDetail: action
            }

        default:
            return state;
    }

}

