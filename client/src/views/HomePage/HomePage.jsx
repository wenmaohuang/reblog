import React, { Component } from 'react'
import './HomePage.scss'
import {  Link } from "react-router-dom";
import SearchUrl from '../../components/SearchUrl';
import SearchInfo from '../../components/SearchInfo/SearchInfo';


let height = window.innerHeight

const main = {
  height: height
}
class HomePage extends Component {
  constructor(props) {
    super(props)
    console.log('!@');
  }
  render() {
    return (
      
      <div className='container' >
          <div className="main" style={main}>
            <SearchInfo></SearchInfo>

          </div>
          <footer>
            <div className="about">
              <p>风移影动</p>
              <p>自由自在的流浪</p>
              <p>
                <Link to="/about">about me</Link>
              </p>
            </div>
            <div className="link">
              <p>相关链接</p>
              <p>
                <Link to='/nav/blog'>博客</Link>
              </p>
              <p>

                <Link to='/daily'>日记</Link>
              </p>
            </div>
            <div className="connect">
              <p>联系我</p>
              <p>地址:广州番禺小龙村</p>
              <p>QQ:648371113</p>
              <p>邮箱:648371113@qq.com</p>
            </div>
            <div className="test"></div>
          </footer>
          <SearchUrl></SearchUrl>
        </div>

    )
  }
}
export default HomePage