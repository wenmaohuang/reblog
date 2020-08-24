import React from 'react'
import styles from './BlogPage.module.scss'
import ArticleSearch from '../../../components/ArticleSearch'
import ArticleSelect from '../../../components/ArticleSelect/ArticleSelect';
import ArticleHot from '../../../components/ArticleHot/ArticleHot';
import ArticleTop from '../../../components/ArticleTop/ArticleTop';
import Visitor from '../../../components/Visitor/Visitor';
import ArticleMain from '../../../components/ArticleMain/ArticleMain';
// import NavBar from "./views/NavBar"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// <Route  path="/nav/:id" component={NavBar} />

class BlogPage extends React.Component {
  constructor(props) {
    super(props)
    // console.log('!@');
  }
  render() {
    return (
      <div className={styles.container}>
        <ArticleMain {...this.props}></ArticleMain>        
        <div className={styles.sidebar}>
          <ArticleSearch></ArticleSearch>
          <ArticleSelect></ArticleSelect>
          <ArticleTop></ArticleTop>
          <ArticleHot></ArticleHot>
          <Visitor></Visitor>
        </div>

      </div>
    )
  }
}
export default BlogPage