import React from 'react'
import styles from './BlogPage.module.scss'
import ArticleSearch from '../../../components/ArticleSearch'
import ArticleSelect from '../../../components/ArticleSelect/ArticleSelect';
import ArticleHot from '../../../components/ArticleHot/ArticleHot';
import ArticleTop from '../../../components/ArticleTop/ArticleTop';
import Visitor from '../../../components/Visitor/Visitor';
import ArticleMain from '../../../components/ArticleMain';
// import NavBar from "./views/NavBar"
import {BrowserRouter as Router, Route, withRouter, Switch} from "react-router-dom";

import Media from 'react-media';
import pic2 from '../../../static/img/2.jpg'
import styled from 'styled-components'

const Small = styled.div`

width: 300px;
@media screen and (max-width: 500px) {
    display:none;
}
`

class BlogPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {


        return (
            <div style={{
                display: 'flex', // width: '100%',
                margin: '0 auto',
                justifyContent: 'center',
                paddingTop: '20px'
            }}>
                <ArticleMain {...this.props}></ArticleMain>
                <Small>
                    <ArticleSearch></ArticleSearch>
                    <ArticleSelect></ArticleSelect>
                    <ArticleTop></ArticleTop>
                    <ArticleHot></ArticleHot>
                    <Visitor></Visitor>
                </Small>
            </div>

        )
    }
}

export default withRouter(BlogPage)