import React from "react";

import {Menu, Button} from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {SubMenu} = Menu;


class NavMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        collapsed: false,
        isShow: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            isShow: !this.state.collapsed

        });
    };

    render() {
        const isShow = {
            display: this.state.isShow ? 'block' : 'none'
        }
        return (<div style={{
                zIndex: '1',
                lineHeight: '60px',
                width: 256
            }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu style={isShow} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                    // style={{display:this.state.isShow}} inlineCollapsed={false}

                >
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        首页
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        {/*博客*/}
                        <Link to="/nav/blog" onClick={this.toggleCollapsed}>博客</Link>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={this.toggleCollapsed} icon={<DesktopOutlined/>}>
                        {/*足球*/}
                        <Link to="/nav/football">足球</Link>

                    </Menu.Item>
                    <Menu.Item key="4" icon={<ContainerOutlined/>}>
                        {/*管理*/}
                        <Link to="/nav/manage">管理</Link>

                    </Menu.Item>
                    <Menu.Item key="5" icon={<ContainerOutlined/>}>
                        {/*管理*/}
                        <Link to="/nav/message">留言</Link>

                    </Menu.Item>
                    <Menu.Item key="6" icon={<ContainerOutlined/>}>
                        {/*管理*/}
                        <Link to="/daily">日记</Link>

                    </Menu.Item>
                    <Menu.Item key="7" icon={<ContainerOutlined/>}>
                        {/*管理*/}
                        <Link to="/links">友链</Link>

                    </Menu.Item>
                    <Menu.Item key="8" icon={<ContainerOutlined/>}>
                        {/*管理*/}
                        <Link to="/about">关于</Link>

                    </Menu.Item>

                </Menu>
            </div>)
    }
}

export default NavMenu;





