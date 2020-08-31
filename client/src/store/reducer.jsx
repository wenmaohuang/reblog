import store from "./index";

let defaultState = {
    articleOption: null,
    article: null,
}


export function reduceArticle(state = defaultState, action) {


    switch (action.type) {

        case 'GET_ARTICLE_OPTION':
            // let test = {a: 1}
            // console.log(action, 'qw');
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
                        // console.log(item, 'rt');
                        text += item.text + '\n'
                        // console.log(text,'yu');



                    })
                    // console.log(text,'yu');

                    newObj.content = text

                    // console.log(typeof (item.content.blocks), 'ty');

                    // console.log(item.content, 'er')

                    newObj.title = item.title
                    newObj.key = index
                    arr.push(newObj)
                })
                return arr
            }
            var newState = newArr()
            // console.log(newState, 'qw');

            return {...state, articleOption: action.value, article: newState}
        // case 'GET_ARTICLE':
        //     var arr = []
        //     var obj = {
        //         key: '1',
        //         name: 'Edward King 1',
        //         age: '32',
        //         address: 'London, Park Lane no. 1',
        //     }
        //     var newArr = function () {
        //         action.value.forEach((item, index) => {
        //             var newObj = JSON.parse(JSON.stringify(obj))
        //             newObj.name = item.title
        //             newObj.key = index
        //             arr.push(newObj)
        //         })
        //         return arr
        //     }
        //     var newState = newArr()
        //     // console.log(action,'qw');
        //
        //     return {
        //         article: newState
        //     }


        default:
            return state;
    }

}

