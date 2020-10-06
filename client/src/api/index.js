import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://www.fyyd.vip:3001/re'
axios.defaults.withCredentials = true
axios.defaults.headers.post["Content-Type"] = "application/x-www-from-urlencoded"
export default {
    postArticleSend({ title, type, tag, surface, content, readcount, comment, year, month, day }) {
        return axios.post('/article/send', { title, type, tag, surface, content, readcount, comment, year, month, day })
    },
    getArticleShow:(function(){
        let skip = 0
        let limit = 10
        return function(index = 0,ifFresh = false){
            if(ifFresh){
                skip = 0
                limit = 10
            }
            // let tag = ['全部文章','HTML&CSS','JavaScript','Node',"Vue&React",'other'][index]
            let tag = index
            if(tag === '全部文章'){
                tag = ''
            }
            
            let data = {skip,limit,tag}
            skip += limit
            return axios.post('/article/getShow',data)
        }
    })(),
    // getArticleTitle() {
    //     return axios.post('/article/getShowTitle')
    // },
    postArticleDel({ title }) {
        return axios.post('/article/delete', { title })
    },
    // postArticleUpdate({ type, title, tag, content }) {
    //     return axios.post('/article/edit', { type, title, tag, content })
    // },
    // postDaily({ content, time }) {
    //     return axios.post('/daily/add', { content, time })
    // },

}