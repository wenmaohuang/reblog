
import React, { Component } from "react";
import "./ArticleSearch.scss";
import { Link } from "react-router-dom"

class ArticleSearch extends Component {
    constructor(props) {
        super(props);
    }

    handleBlurSearchTitle(e) {
        const ev = e || window.event
        ev.stopPropagation()
    }
    handleSeachTitle(e) {
        const ev = e || window.event
        ev.stopPropagation()
    }
    handleDelete(e) {
        const ev = e || window.event
        console.log(ev.keyCode);
    }
    render() {
        return (
            <div onClick={(e) => this.handleBlurSearchTitle(e)} className="search-main">
                <input
                    type="text"
                    v-model="word"
                    onInput={this.handleSearch}
                    onKeyUp={(e) => this.handleDelete(e)}
                    onClick={(e) => this.handleSeachTitle(e)}
                    placeholder="请输入搜索内容"
                />
                <i className="el-icon-search"></i>
                <div className="search-title">
                    <ul>
                        <Link
                            // v-for="(item,index) in searchArr"

                            className="img"
                            to="/content"
                        >
                            {/* <li onClick="handleClick(item)">{{ item }}</li> */}
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}
export default ArticleSearch;
