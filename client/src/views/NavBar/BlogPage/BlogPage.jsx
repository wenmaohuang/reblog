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

class BlogPage extends React.Component {
    constructor(props) {
        super(props)
        // console.log('!@');
    }

    render() {
        return (

            <div>
                <div className={styles.container}>
                     <Index></Index>
                     <div className={styles.sidebar}>
                     <ArticleSearch></ArticleSearch>
                     <ArticleSelect></ArticleSelect>
                     <ArticleTop></ArticleTop>
                     <ArticleHot></ArticleHot>
                     <Visitor></Visitor>
                     </div>


                </div>
            </div>

            //   <Media queries={{
            //     small: "(max-width: 499px)",
            //     large: "(min-width: 500px)"
            // }}>
            //     {matches => (
            //
            //         <div className="main" style={{backgroundImage:`url(${pic2})`}}>
            //             {matches.small &&
            //                 <div className={styles.container}>
            //                 <Index {...this.props}></Index>
            //
            //
            //               </div>
            //             }
            //             {matches.large &&
            //               <div className={styles.container}>
            //               <Index {...this.props}></Index>
            //               <div className={styles.sidebar}>
            //                 <ArticleSearch></ArticleSearch>
            //                 <ArticleSelect></ArticleSelect>
            //                 <ArticleTop></ArticleTop>
            //                 <ArticleHot></ArticleHot>
            //                 <Visitor></Visitor>
            //               </div>
            //
            //             </div>
            //             }
            //         </div>
            //     )}
            // </Media>
        )
    }
}

export default withRouter(BlogPage)