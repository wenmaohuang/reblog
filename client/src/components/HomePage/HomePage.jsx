import React from 'react'
import './HomePage.scss'

let height = window.innerHeight

const main = {
  height: height
}
class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container' >
        <div className="main" style={main}>

        </div>
        <footer>
          <div class="about">
            <p>风移影动</p>
            <p>自由自在的流浪</p>
            <p>
              <router-link to="/about">about me</router-link>
            </p>
          </div>
          <div class="link">
            <p>相关链接</p>
            <p>
              {/* <router-link to="/blog/全部文章">博客</router-link> */}
              {/* <Link></Link> */}
            </p>
            <p>

              <router-link to="/daily">日记</router-link>
            </p>
          </div>
          <div class="connect">
            <p>联系我</p>
            <p>地址:广州番禺小龙村</p>
            <p>QQ:648371113</p>
            <p>邮箱:648371113@qq.com</p>
          </div>
          <div className="test"></div>
        </footer>
      </div>

    )
  }
}
export default HomePage