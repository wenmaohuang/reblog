import React from "react";
import {Main, Section, Head, Time, P, Footer, Flex, Tag, TagSpan, Reader, Iconfont, ReaderSpan} from "./styled"
import store from '../../store/index'
import {BrowserRouter as Router, Redirect, Route, Switch, Link, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import {getArticleDetail, getArticleOption} from "../../store/action";
import {connect} from "react-redux";

class Index extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {

        console.log(this.props, 'kl');

        console.log(store.getState(),'zx');



    }

    goToUrl(item) {
        this.props.history.push('/nav/article')
        this.props.getArticleDetail(item)
    }

    // onClick={this.goToUrl.bind(this, item)}



    render() {
        console.log(this.props, ';z');

        //
        // if (store.getState().articleOption) {
        //
        // }


        return (
            <Router>
                <Main>
                    {this.props.articleOption && this.props.articleOption.map((item, index) => {
                        let content = item.content.blocks.map((item, index) => {
                            return (
                                <p key={index}>{item.text}</p>
                            )
                        })
                        return (
                            <div key={index} style={{backgroundColor: 'transparent', padding: '0 20px'}}>
                                <Section>
                                    <Head>
                                        <h5 style={{borderBottom: '1px solid #ddd', width: '100%'}}>
                                            <span style={{color: 'blue', fontSize: '20px'}}>【{item.type}】</span>
                                            <span style={{fontSize: '20px'}}>{item.title}</span>
                                        </h5>
                                        <Time>
                                            <P>{item.day}</P>
                                            <div>
                                                <span style={{padding: '0 5px'}}>{item.month}月</span>
                                                <span style={{padding: '0 5px'}}>{item.year}</span>
                                            </div>
                                        </Time>
                                    </Head>

                                    <a onClick={this.goToUrl.bind(this, item)} style={{display: 'flex',}}
                                       className="content">
                                        <img style={{width: '250px', padding: '10px', height: '160px'}}
                                             src="http://www.fyyd.vip:3001/img/upload/article/4.jpg"
                                        />
                                        <div style={{
                                            width: '500px',
                                            padding: '10px',
                                            height: '300px',
                                            overflow: 'hidden'
                                        }}>
                                            {content}
                                        </div>
                                    </a>
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
                            </div>
                        )
                    })}
                </Main>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleOption: state.articleOption,
        article: state.article,
    }
}

const mapActionsToProps = (dispatch) => {
    return {

        ...bindActionCreators({getArticleOption, getArticleDetail}, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Index));
