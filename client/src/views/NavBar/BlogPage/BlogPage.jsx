import React from 'react'
import styles from './BlogPage.module.scss'
import ArticleSearch from '../../../components/ArticleSearch'
import ArticleSelect from '../../../components/ArticleSelect/ArticleSelect';
import ArticleHot from '../../../components/ArticleHot/ArticleHot';
import ArticleTop from '../../../components/ArticleTop/ArticleTop';
import Visitor from '../../../components/Visitor/Visitor';
import Index from '../../../components/ArticleMain';
// import NavBar from "./views/NavBar"
import {BrowserRouter as Router, Route, withRouter, Switch} from "react-router-dom";

import Media from 'react-media';
import pic2 from '../../../static/img/2.jpg'
import styled from 'styled-components'

class BlogPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {


        return (


            <Media queries={{
                small: "(max-width: 499px)",
                large: "(min-width: 500px)"
            }}>
                {matches => (

                    <div className="main" style={{
                        width: '100%',
                        margin: '0 auto',
                        backgroundImage: `url(${pic2})`
                    }}>
                        {matches.small && <div style={{
                            display: 'flex',
                            width: '100%',
                            margin: '0 auto',
                            paddingTop: '20px'
                        }}>
                            <Index {...this.props}></Index>


                        </div>}
                        {matches.large && <div style={{
                            display: 'flex',
                            // width: '100%',
                            margin:'0 auto',
                            justifyContent: 'center',
                            paddingTop: '20px'
                        }}>
                            <Index {...this.props}></Index>
                            <div style={{width: '300px'}}>
                                <ArticleSearch></ArticleSearch>
                                <ArticleSelect></ArticleSelect>
                                <ArticleTop></ArticleTop>
                                <ArticleHot></ArticleHot>
                                <Visitor></Visitor>
                            </div>

                        </div>}
                    </div>)}
            </Media>)
    }
}

export default withRouter(BlogPage)