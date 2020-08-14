
import React from "react";
import styles from "./ArticleSelect.module.scss";
import { Link } from "react-router-dom"

class ArticleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.coverIndex = 1
        this.articleTages = ['html', 'css', 'javascript']
        this.handleMouseleave = this.handleMouseleave
        this.handleMouseenter = this.handleMouseenter

    }

    handleMouseleave = () => {
        console.log(1);
    }

    handleMouseenter() {


    }

    

    article = function () {
        let item = []
        for (let index = 0; index < this.articleTages.length; index++) {
            item.push(
                <li  key = {index}
                    onMouseEnter={this.handleMouseenter(index)}
                    onMouseLeave={this.handleMouseleave}
                >
                    <Link to={'/nav/blog/' + this.articleTages[index]}>{this.articleTages[index]}</Link>
                </li>
            )
        }
        return item
    }

    render() {
        // console.log(this.article, '!$');
        return (
            <div className={styles.search}>
                <ul className={styles}>
                    {this.article()}

                </ul>
                <div className={styles.cover} style={{ top: this.coverIndex * 40 + 'px' }}></div>
            </div>
        )
    }
}
export default ArticleSelect;
