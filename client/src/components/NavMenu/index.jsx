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
                        博客
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined/>}>
                        管理
                    </Menu.Item>

                </Menu>
            </div>)
    }
}

export default NavMenu;





