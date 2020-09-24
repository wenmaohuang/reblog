import React, {Component} from 'react';

class Football extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div style={{margin: '10px'}}>
            <a href="http://www.azhibo.com/zuqiuzhibo" style={{fontSize: '20px',padding: '10px'}}>A直播</a>
            <a href="https://kanqiubao.com/room/10716/" style={{fontSize: '20px',padding: '10px'}}>看球宝</a>
        </div>);
    }
}

export default Football;