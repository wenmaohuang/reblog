
import React from "react";
import styles from "./ArticleHot.module.scss";

class ArticleHot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.hot}>
                <h3>热门文章</h3>
                <ul>
                    <li>
                        <i>index</i>
                        <a>i.title</a>
                    </li>
                </ul>
            </div >
        )
    }
}
export default ArticleHot;
