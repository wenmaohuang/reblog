
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
import ArticleSend from './ArticleSend/ArticleSend'
import Media from 'react-media';



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
    goToUrl=()=>{
    this.props.history.push('/nav/articleSend')

    }

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
            <div>
                <Router basename={'/reblog'}>


                    <div>
                        <Media queries={{
                            small: "(max-width: 499px)",
                            // medium: "(min-width: 600px) and (max-width: 1199px)",
                            large: "(min-width: 500px)"
                        }}>
                            {matches => (
                                <div>
                                    {matches.small &&

                                        <div className="main" style={{ display: 'flex',background:'#aaa' }}>
                                        <Menu
                                        style={{ width: '100%' }}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode={this.state.mode}
                                        theme={this.state.theme}
                                        >

                                        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="文章管理">
                                        <Menu.Item key="3">
                                        <a onClick={this.goToUrl}>发表文章</a>

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

                                        {/*<Link to="/nav/manage/article">文章管理</Link>*/}


                                        </Menu.Item>
                                        <Menu.Item key="2" icon={<CalendarOutlined />}>
                                        Navigation Two
                                        </Menu.Item>
                                        </Menu>



                                        </div>
                                    }
                                    {matches.medium && <p>I am medium!</p>}
                                    {matches.large &&

                                        <div className="main" style={{ display: 'flex' }}>
                                        <Menu
                                        style={{ width: 256 }}
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        mode={this.state.mode}
                                        theme={this.state.theme}
                                        >

                                        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="文章管理">
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

                                        {/*<Link to="/nav/manage/article">文章管理</Link>*/}


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
                                    }
                                </div>
                            )}
                        </Media>
                    </div>


                </Router>
            </div>
        );
    }
}
export default ManagePage;





