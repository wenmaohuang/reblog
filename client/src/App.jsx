import React, {Component} from 'react';

import {connect} from 'react-redux'

// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import HomePage from "./views/HomePage"
import NavBar from "./views/NavBar"
import ManagePage from './views/NavBar/ManagePage';

import store from './store/index.jsx'
// import action from './store/action'
import BlogPage from "./views/NavBar/BlogPage"


import { getArticleOption,getArticleDetail} from './store/action'
// import getArticleOption from './store/articleOptionAction'


import VConsole from 'vconsole'

import api from './api/index'
import {bindActionCreators} from "redux";

var vConsole = new VConsole();
const getArticleShow = api.getArticleShow

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.ifLogin = false

    }


    componentDidMount() {

        this.props.getArticleOption()


    }


    render() {
        // console.log(this.props, '+*');
        return (

            <Router>
                <div className="App">


                </div>

                <Switch>
                    <Route exact path="/" component={HomePage}/>


                    <Route path="/nav" component={NavBar}/>
                    {/*<Route path="/nav/manage/:id" component={ManagePage}/>*/}
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleOption: state.articleOption,
        article: state.article,
        articleDetail:state.articleDetail
    }
}

const mapActionsToProps = (dispatch) => {
    return {

      ...bindActionCreators({getArticleOption,getArticleDetail},dispatch)
    }
}


export default withRouter(connect(mapStateToProps, mapActionsToProps)(App));
// export default withRouter(App);
