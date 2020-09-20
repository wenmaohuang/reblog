
import React from "react";

import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class NavMenu extends React.Component{
    constructor(props){
        super(props);
    }
    state = {
        collapsed: false,
        // isShow:'none',
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            // isShow: 'none' ? 'block':'none'

        });
    };

    render(){
        return (
            <div style={{zIndex:'1', width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                    // style={{display:this.state.isShow}}
                    inlineCollapsed={false}


                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        Option 3
                    </Menu.Item>

                </Menu>
            </div>
        )
    }
}
export default NavMenu;





