
import React from "react";
// import styles from "./MainArticle.module.scss";
import { Main, Section, Head, Time, P, Footer, Flex, Tag, TagSpan, Reader, Iconfont, ReaderSpan } from "./styled"
import store from '../../store/index'
// import {getArticle,initFetch} from '../../store/action'
import { connect } from 'react-redux'

import api from '../../api/index'
import getArticle from '../../store/action'
import reduceArticle from '../../store/action'
const getArticleShow = api.getArticleShow



class ArticleMain extends React.Component {
    constructor(props) {
        super(props);

     
        this.state = {
            test: {}
        }

    }


    

    componentDidMount() {
     
      
    }

  

    handleArticleList(item) {

    }


    render() {
        // console.log(this.state,'.&');
console.log(store.getState(),'1!');

        if (store.getState().article) {
            console.log("!@#");
            var article = store.getState().article.map((item, index) => {
                let content = item.content.blocks.map((item, index) => {
                    return (
                        <p key={index}>{item.text}</p>
                    )
                })


                return (
                    // <p>{item.title}+aaa</p>
                    <Section key={index}>
                        <Head>
                            <h5>
                                <span style={{ color: 'blue' }}>{item.type}</span>
                                <span>{item.title}</span>
                            </h5>
                            <Time>
                                <P>{item.day}</P>
                                <div>
                                    <span style={{ padding: '0 5px' }}>{item.month}</span>
                                    <span style={{ padding: '0 5px' }}>{item.year}</span>
                                </div>
                            </Time>
                        </Head>
                        <div className="content">
                            <router-link className='img' to="/content">
                                <img src="" onClick={this.handleArticleList(this.item)} />
                            </router-link>
                            <router-link className='p' to="/content">
                                {content}

                                {/* <p onClick={this.handleArticleList(this.item)}>{item.content}</p> */}
                            </router-link>
                        </div>
                        <Footer>
                            <Flex>
                                <Tag>
                                    <TagSpan>{item.tag}</TagSpan>
                                </Tag>
                                <Reader>
                                    <Iconfont className="iconfont icon-yuedu"></Iconfont>
                                    <ReaderSpan>{item.readcount}</ReaderSpan>
                                </Reader>
                            </Flex>
                        </Footer>
                    </Section>
                )
            })
        }

     
        return (
            <Main>

                {article}
            </Main>

        )
    }
}



export default ArticleMain;
