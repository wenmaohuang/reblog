
import React from "react";
import styles from "./ArticleTop.module.scss";

class ArticleTop extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.top}>
                
                    <h3>置顶文章</h3>
                    <ul>
                        <li>
                            <i></i>
                            <a href="getArticleRecommend._id">title</a>
                        </li>
                    </ul>
                
            </div>
        )
    }   
}
export default ArticleTop;
