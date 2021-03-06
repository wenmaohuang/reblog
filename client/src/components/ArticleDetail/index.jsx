import React from "react";
import store from "../../store";
// import {

    // Main,

// } from "../ArticleMain/styled";
import {BrowserRouter as Router} from "react-router-dom";


class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.props, 'l;');

    }

    render() {

        if (store.getState().articleDetail) {


            var content = store.getState().articleDetail.articleDetail.content.blocks.map((item, index) => {
                return (
                    <div key={index} className="content">
                        {item.text}

                    </div>

                )
            })

        }


        return (

            <Router>
                <div>

                    <div className="detail"
                         style={{width: '1260px',margin:'0 auto', backgroundColor: '#aaa'}}>
                        <div className="head">
                            <div className="title">
                                <h5>

                                </h5>
                                <span>作者</span>
                                <span>...</span>
                                <span>阅读</span>
                                <span>...</span>
                                <span>发表时间</span>
                                <span>...</span>
                            </div>


                            <div className="time">
                                {/*<p>{{day}}</p>*/}
                                {/*<div>*/}
                                {/*    <span>{{month}}</span>*/}
                                {/*    <span>{{year}}</span>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <div>
                            {content}

                        </div>
                    </div>

                </div>

            </Router>

        )


    }
}


export default (ArticleDetail);
