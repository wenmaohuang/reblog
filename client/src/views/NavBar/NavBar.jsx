
import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { BrowserRouter as Router, Route,withRouter, Switch, Link } from "react-router-dom";
import BlogPage from "./BlogPage"
import ManagePage from "./ManagePage"

import Media from 'react-media';
import ArticleDetail from '../../components/ArticleDetail'

import Button from 'antd/lib/button'
import 'antd/dist/antd.css'
import LoginPage from "../../components/LoginPage";
import MessagePage from "../../components/MessagePage"


class NavBar extends Component {


    constructor(props) {
        super(props);
        this.ifLogin = false
   

    }

    //获取值
  
    handleRefresh=()=> {
        this.props.history.push('/')
    }

    handlerRegister() {
        console.log('');
    }
    handlerLogin() {
        console.log('');
    }
    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }

      componentDidMount(){
    
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
            
                <>
                 <LoginPage></LoginPage>
                 <Button onClick={this.handlerRegister} type="success">注册</Button>
                 </>
            )
        }

        return (
            <Router>
               

                <Media queries={{
                small: "(max-width: 499px)",
                // medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 500px)"
            }}>
                {matches => (

                    <div >
                        {matches.small &&
                             <div className={styles.navMain}>
                             <div className={styles.logo}>FYYD</div>
                             
                             <div className={styles.login}>
                                 {login}
                             </div >
         
                         </div >
                        }
                        {/* {matches.medium && <p>I am medium!</p>} */}
                        {matches.large && 
                         <div className={styles.navMain}>
                         <div className={styles.logo}>FYYD</div>
                         <div className={styles.nav}>
                             <ul  >
                                 <li>
                                     <Link onClick={this.handleRefresh} to={"/"}>首页</Link>
     
                                 </li>
                                 <li>
                                     <Link to="/nav/blog">博客</Link>
                                 </li>
                                 <li>
                                     <Link to="/nav/manage">管理</Link>
                                 </li>
                                 <li>
                                     <Link to="/nav/message">留言</Link>
                                 </li>
                                 <li>
                                     <Link to="/daily">日记</Link>
                                 </li>
                                 
                                 <li>
                                     <Link to="/links">友链</Link>
                                 </li>
                                 <li>
                                     <Link to="/about">关于</Link>
                                 </li>

                             </ul>
                         </div>
                         <div className={styles.login}>
                             {login}
                         </div >
     
                     </div >
                        }
                    </div>
                )}
            </Media>
            


                <Switch>
                    


                    <Route   path="/nav/blog" component={BlogPage} />
                    <Route   path="/nav/article" component={ArticleDetail} />
                    <Route  path="/nav/manage" component={ManagePage} />
                    <Route path="/nav/message" component={MessagePage}/>
                </Switch>

            </Router>
        )
    }


}





export default withRouter(NavBar);
