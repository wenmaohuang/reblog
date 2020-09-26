
import React from "react";
import styles from "./SearchUrl.module.scss";
import Media from 'react-media';



class SearchUrl extends React.Component {
    constructor(props) {
        super(props);

        this.urlList = {
            flutterLearn:"https://learnku.com/blog/ZeLingNing",
            bilibiliFlutter:"https://www.bilibili.com/video/BV1S4411E7LY?p=4",
            pub:"https://pub.flutter-io.cn",
            ant: "https://ant.design/components/divider/",
            bilibiliGulp: "https://www.bilibili.com/video/BV1D4411P7tx?p=3",
            github: "https://github.com/",

            mongoosejs: "https://mongoosejs.com/docs/guide.html",
            npmjs: "https://www.npmjs.com/",
            element: "https://element.eleme.cn/#/zh-CN/component/installation",
            vuejs: "https://vuejs.org/",
            layui: "https://www.layui.com/",
            qqMusic: "https://y.qq.com/portal/player.html",
            aliyun: "https://www.aliyun.com/",
            iconfont:
                "https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",
            fanyi: "https://fanyi.baidu.com/?aldtype=16047#auto/zh",
            photoGirls: "https://www.umei.cc/bizhitupian/meinvbizhi/",
            yinshi:
                "https://www.shiguangkey.com/video/1346?videoId=141606&classId=9262&playback=1",
            afei:
                "https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997",
            remi:
                "https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1",
            zhuimeng:
                "https://www.shiguangkey.com/video/1561?videoId=53934&classId=4298&playback=1",
            haiwen:
                "https://www.shiguangkey.com/video/1561?videoId=86919&classId=6240&playback=1",
            wanzhang1:
                "https://www.shiguangkey.com/video/5404?videoId=125677&classId=8638&playback=1",
            wanZhang2:
                "https://www.shiguangkey.com/video/903?videoId=191211&classId=12327&playback=1",
            cctv: "http://tv.cctv.com/live/",
            yanshisan: "https://www.yanshisan.cn/Blog/Article",
            afeifeifei:
                "https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",
            lagou: "https://www.lagou.com/resume/myresume.html",
            "51job": "https://i.51job.com/userset/my_51job.php?lang=c",
            zhaopin: "https://i.zhaopin.com/",
            "58tongcheng":
                "https://my.58.com/pro/myjob/index/?PGTID=0d000000-0000-05c4-710e-6428d7138f3a&ClickID=1",
            zhipin: "https://www.zhipin.com/web/geek/recommend?ka=header-personal",
            weixin:
                "https://developers.weixin.qq.com/miniprogram/en/dev/framework/",
            weixinAdmin:
                "https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=174094833&lang=zh_CN",
            bilibiliWeixin: "https://www.bilibili.com/video/BV1nE41117BQ?p=9",
            movie: "http://27k.cc/?m=vod-play-id-37805-src-1-num-1.html",
            flutter: "https://flutter.dev/docs/development/tools/android-studio",
            typescript: "https://www.typescriptlang.org/docs/handbook/gulp.html",
            node: "https://nodejs.org/dist/latest-v14.x/docs/api/",
            webpack:
                "https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax",
            react: "https://reactjs.org/docs/getting-started.html",
            angular: "https://angular.cn/guide/architecture-modules",
            ngblog: "http://www.fyyd.vip:3003",
            nginx: "http://nginx.org/en/docs/",
            centos: "https://www.linuxidc.com/Linux/2018-06/152959.htm",
            express: "https://www.expressjs.com.cn/5x/api.html",
            blogadmin: "http://www.fyyd.vip:3002/",
            reblog: "http://www.fyyd.vip:3001/",
            mysql:
                "https://dev.mysql.com/doc/refman/8.0/en/connection-options.html",
            apache: "http://httpd.apache.org/docs/2.4/",
            gulpjs: "https://gulpjs.com/docs/en/api/registry",
            babel: "https://babeljs.io/docs/en/",
            less: "http://lesscss.org/",
            meinv: "https://www.tupianzj.com/meinv/mm/",
            mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            threejs: "http://www.webgl3d.cn/",
            bootCDN: "https://www.bootcdn.cn/",
            bilibiliAngualar:
                "https://www.bilibili.com/video/BV1bt411e71b?from=search&seid=15562787847422779010",
            angularcn: "https://angular.cn/tutorial/toh-pt3",
            angulartantui:
                "https://ng.ant.design/components/collapse/en#ng-content",
        }

        this.keyword = ''
        this.urlKey = []
        this.urlKeyList = []
        this.newUrlList = {}
        this.urlresult = {}
        this.state = {
            url: []
        }
        Object.keys(this.urlList)
            .sort()
            .map(key => {

                this.newUrlList[key] = this.urlList[key];
            });

        // this.handleSearchUrl = this.handleSearchUrl.bind(this)


    }
    componentDidMount() {

    }
    handleSearchUrl = () => {
        this.keyword = this.textInput.value
        console.log(this.textInput.value,'%&');
        this.urlKeyList = []

        for (var key in this.newUrlList) {
            if (this.keyword) {
                var reg = new RegExp("^" + this.keyword);
                this.urlKey = key.match(reg);
                if (this.urlKey !== null) {
                    var urlResultKey = this.urlKey["input"];
                    this.urlresult[urlResultKey] = this.newUrlList[urlResultKey]
                }
            }
            if (this.keyword === '') {
                this.urlresult = {}
            }
        }
        let arr = Object.keys(this.urlresult)
        for (let key of Object.keys(this.urlresult)) {
            if (arr.length > this.urlKeyList.length) {
                this.urlKeyList.push(key)
            }
            if (this.keyword === "") {
                this.urlKeyList = []
            }
        }
        console.log(this.urlresult,'%!');
        this.setState({
            url: Object.keys(this.urlresult).map((key) => {
                return (
                    <li style={{display:'block', width: '300px', listStyleType: 'none' }} key={key}>
                        <a style={{ textAlign: 'center' }} href={this.urlresult[key]} >
                            {key}
                        </a>
                    </li>

                )
            })
        })
    }
    handleFocus = () => {
        this.textInput.focus()
        this.setState({
            url: Object.keys(this.newUrlList).map((key) => {
                return (
                    <li style={{display:'block', width: '300px', listStyleType: 'none' }} key={key}>
                        <a style={{ textAlign: 'center' }} href={this.newUrlList[key]} >
                            {key}
                        </a>
                    </li>

                )
            })
        })

    }
    
    keyUp = (e) => {
        if (e.keyCode === 8) {
            this.setState({
                url: Object.keys(this.newUrlList).map((key) => {
                    return (
                        <li style={{display:'block', width: '300px', listStyleType: 'none' }} key={key}>
                            <a style={{ textAlign: 'center' }} href={this.newUrlList[key]} >
                                {key}
                            </a>
                        </li>

                    )
                })
            })

        }
    }
    render() {
        console.log(this.textInput, '%!');
        return (

            <Media queries={{
                small: "(max-width: 499px)",
                // medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 500px)"
            }}>
                {matches => (

                    <div>
                        {matches.small &&
                             <ul className={styles.hideScollbar} onMouseEnter={this.handleFocus}
                             style={{ display: 'flex',width:'300px',padding:'0',fontSize:'20px', height: '300px',margin:'0 auto', overflow: 'scroll', flexDirection: 'column', alignItems: 'center' }}>
                             <input className={styles.hideBorder} ref={(input) => { this.textInput = input; }} onKeyUp={this.keyUp} onInput={this.handleSearchUrl}
                                 style={{ display:'inlineBlock',textIndent:'0.5rem',fontSize:'20px',margin:'10px 0', width: '300px',lineHeight:'45px',borderRadius:'10px', }}
                                 type="text"
                             />
                             {this.state.url}
             
                         </ul>
                        }
                        {/* {matches.medium && <p>I am medium!</p>} */}
                        {matches.large && 
                          <ul className={styles.hideScollbar} onMouseEnter={this.handleFocus}
                          style={{ display: 'flex',width:'400px',padding:'0',fontSize:'20px', height: '300px',margin:'0 auto', overflow: 'scroll', flexDirection: 'column', alignItems: 'center' }}>
                          <input className={styles.hideBorder} ref={(input) => { this.textInput = input; }} onKeyUp={this.keyUp} onInput={this.handleSearchUrl}
                              style={{ display:'inlineBlock',textIndent:'0.5rem',fontSize:'20px',margin:'10px 0', width: '400px',lineHeight:'45px',borderRadius:'10px', }}
                              type="text"
                          />
                          {this.state.url}
          
                      </ul>
                        }
                    </div>
                )}
            </Media>
          
        )
    }


}
export default SearchUrl;
