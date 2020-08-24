
import React from "react";
import styles from "./ManagePage.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { Menu, Divider, Layout } from 'antd';
// const { Sider, Content } = Layout;

import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';
import ArticleManage from './ArticleManage'
import ArticleSend from './ArticleSend/index'



// import NavBar from "../NavBar";



const { SubMenu } = Menu;


class ManagePage extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        mode: 'inline',
        theme: 'light',
    };

    changeMode = value => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    render() {
        return (
            <>
                <Router>
                    {/* <Switch onChange={this.changeMode} /> Change Mode
            <Divider type="vertical" />
                    <Switch onChange={this.changeTheme} /> Change Style */}
                    <br />
                    <br />
                    {/* <NavBar></NavBar> */}
                    <div className="main" style={{ display: 'flex' }}>
                        <Menu
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode={this.state.mode}
                            theme={this.state.theme}
                        >

                            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation wo">
                                <Menu.Item key="3">
                                    <Link to="/nav/manage/send">发表文章</Link>

                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/nav/manage/edit">编辑文章</Link>

                                </Menu.Item>
                                <SubMenu key="sub1-2" title="Submenu">
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="link" icon={<LinkOutlined />}>
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                    Ant Design
                            </a>
                            </Menu.Item>
                            <Menu.Item key="1" icon={<MailOutlined />}>

                                <Link to="/nav/manage/article">文章管理</Link>


                            </Menu.Item>
                            <Menu.Item key="2" icon={<CalendarOutlined />}>
                                Navigation Two
                         </Menu.Item>
                        </Menu>
                        <Switch>

                            <Route path="/nav/manage/send" component={ArticleSend} />

                            <Route path="/nav/manage/edit" component={ArticleManage} />

                        </Switch>


                    </div>



                </Router>
            </>
        );
    }
}
export default ManagePage;





