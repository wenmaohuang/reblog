
import React from "react";
// import styles from "./LoginPage.module.scss";
import { Modal, Button } from 'antd';
import {ButtonStyle} from "./styled"
import FormPage from "../FormPage/FormPage";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }


    state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
}
    

    render() {
        return (
          <>
          <Button style={ButtonStyle} type="primary" onClick={this.showModal}>
              登录
          </Button>
          <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
          >

            <FormPage></FormPage>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </Modal>
      </>
        )
    }
}
export default LoginPage;
