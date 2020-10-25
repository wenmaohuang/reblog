import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch, Link, withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import {getArticleDetail, getArticleOption} from "../../store/action";
import {connect} from "react-redux";
import Media from "react-media";
import styled from 'styled-components'

const Content = styled.div
`
width: 500px;
 padding: 10px;
 height: 300px;
 overflow: hidden;
 @media screen and (max-width: 500px) {
    display:none;
}
`

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    goToUrl(item) {
        this.props.history.push('/nav/article')
        this.props.getArticleDetail(item)
    }

    render() {
        console.log(this.props, ';z');
        return (
            <Router basename={'/reblog'}>
                <div style={{width: '960px'}}>
                    {this.props.articleOption && this.props.articleOption.map((item, index) => {
                        let content = item.content.blocks.map((item, index) => {
                            return (<p key={index}>{item.text}</p>)
                        })
                        return (<div key={index} style={{backgroundColor: 'transparent', padding: '0 20px'}}>
                            <div style={{position: 'relative', boxSizing: 'border-box', height: '450px', width: '100%', marginBottom: '20px', paddingLeft: '20px', backgroundColor: '#fff'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '16px', padding: '5px'}}>
                                    <h5 style={{borderBottom: '1px solid #ddd', paddingTop: '5px', width: '100%'}}>
                                        <span style={{color: 'blue', fontSize: '16px'}}>【{item.type}】</span>
                                        <span className='test' style={{fontSize: '20px'}}>{item.title}</span>
                                    </h5>
                                    <div style={{display: 'flex', flexDirection: 'column', paddingRight: '10px', textAlign: 'center',}}>
                                        <div style={{}}>{item.day}</div>
                                        <div style={{display: 'flex', justifyContent: 'space-around', textAlign: 'center', width: '90px'}}>
                                            <span style={{padding: '0 5px'}}>{item.month}月</span>
                                            <span style={{padding: '0 5px'}}>{item.year}</span>
                                        </div>
                                    </div>
                                </div>

                                <a onClick={this.goToUrl.bind(this, item)} style={{display: 'flex',}} className="content">
                                    <img style={{width: '250px', padding: '10px', height: '160px'}} src="http://www.fyyd.vip/reblog/img/upload/article/4.jpg"/>
                                    <Content>
                                        {content}
                                    </Content>
                                </a>
                                <footer style={{position: 'absolute', width: '90%', bottom: '10px'}}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div style={{width: '100%', borderTop: '1px solid #ddd'}}>
                                            <div style={{display: 'inline-block', padding: '10px 0', boxSizing: 'border-box'}}>{item.tag}</div>
                                        </div>
                                        <div style={{display: 'flex', flexDirection: 'column'}}>
                                            <div style={{width: '20px', textAlign: 'center', fontSize: '25px'}} className="iconfont icon-yuedu"></div>
                                            <div style={{display: 'inline-block', textAlign: 'center', boxSizing: 'border-box'}}>{item.readcount}</div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>)
                    })}
                </div>
            </Router>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleOption: state.articleOption, article: state.article,
    }
}

const mapActionsToProps = (dispatch) => {
    return {

        ...bindActionCreators({getArticleOption, getArticleDetail}, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Index));
