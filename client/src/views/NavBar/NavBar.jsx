
import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BlogPage from "./BlogPage"



import Button from 'antd/lib/button'
import 'antd/dist/antd.css'
import LoginPage from "../../components/LoginPage";


class NavBar extends Component {


    constructor(props) {
        super(props);
        this.ifLogin = false
        // console.log(this.props, '!#');
        this.handleRefresh = this.handleRefresh.bind(this)

    }

    //获取值
  
    handleRefresh() {
        this.props.history.push('/')
    }

    handlerRegister() {
        console.log('');
    }
    handlerLogin() {
        console.log('');
    }
    render() {
        let login
        if (this.ifLogin) {
            login = (
                <el-popover trigger="hover" placement="top-start" width="100" content="欢迎登录">
                </el-popover>
            )

        } else {
            login = (
                // <div className={styles.else}>
                //     {/* <Button onClick={this.handlerLogin} type="primary">登录</Button> */}
                   
                // </div>
                <>
                 <LoginPage></LoginPage>
                 <Button onClick={this.handlerRegister} type="success">注册</Button>
                 </>
            )
        }

        return (
            <Router >
                <div className={styles.navMain}>
                    <div className={styles.logo}>FYYD</div>
                    <div className={styles.nav}>
                        <ul >
                            <li>
                                <Link onClick={this.handleRefresh} to={"/"}>首页</Link>

                            </li>
                            <li>
                                <Link to="/nav/blog">博客</Link>
                            </li>
                            <li>
                                <Link to="/nav/message">留言</Link>
                            </li>
                            <li>
                                <Link to="/nav/daily">日记</Link>
                            </li>
                            <li>
                                <Link to="/nav/links">友链</Link>
                            </li>
                            <li>
                                <Link to="/nav/about">关于</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.login}>
                        {login}
                    </div >

                </div >


                <Switch>
                    <Route  path="/nav/blog" component={BlogPage} />
                </Switch>

            </Router>
        )
    }


}





export default NavBar;
