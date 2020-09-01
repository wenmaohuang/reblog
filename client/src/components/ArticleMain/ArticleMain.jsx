
import React from "react";
import { Main, Section, Head, Time, P, Footer, Flex, Tag, TagSpan, Reader, Iconfont, ReaderSpan } from "./styled"
import store from '../../store/index'
class ArticleMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // test: {}
        }
    }
    componentDidMount() {
    }
    handleArticleList(item) {

    }
    render() {
        console.log(store.getState(), '1!');
        if (store.getState().articleOption) {
            console.log("!@#");
            var article = store.getState().articleOption.map((item, index) => {
                let content = item.content.blocks.map((item, index) => {
                    return (
                        <p  key={index}>{item.text}</p>
                    )
                })
                return (
                    // <p>{item.title}+aaa</p>
                    <div key={index} style={{backgroundColor:'transparent',padding:'0 20px'}}>
                        <Section >
                            <Head >
                                <h5 style={{borderBottom:'1px solid #ddd',width:'100%'}}>
                                    <span style={{ color: 'blue',fontSize:'20px' }}>【{item.type}】</span>
                                    <span style={{fontSize:'20px'}}>{item.title}</span>
                                </h5>
                                <Time>
                                    <P>{item.day}</P>
                                    <div>
                                        <span style={{ padding: '0 5px' }}>{item.month}月</span>
                                        <span style={{ padding: '0 5px' }}>{item.year}</span>
                                    </div>
                                </Time>
                            </Head>
                            <div style={{display:'flex'}} className="content">
                                <router-link className='img' to="/content">
                                    <img style={{width:'250px',padding:'10px',height:'160px'}} src="http://www.fyyd.vip:3001/img/upload/article/4.jpg" onClick={this.handleArticleList(this.item)} />
                                </router-link>
                                <router-link style={{width:'500px' ,padding:'10px',height:'300px',overflow:'hidden'}} className='p' to="/content">
                                    {content}

                                    {/* <p onClick={this.handleArticleList(this.item)}>{item.content}</p> */}
                                </router-link>
                            </div>
                            <Footer>
                                <Flex>
                                    <Tag>
                                        <TagSpan>{item.tag}</TagSpan>
                                    </Tag>
                                    <Reader>
                                        <Iconfont className="iconfont icon-yuedu"></Iconfont>
                                        <ReaderSpan>{item.readcount}</ReaderSpan>
                                    </Reader>
                                </Flex>
                            </Footer>
                        </Section>
                    </div>
                )
            })
        }


        return (
            <Main>

                {article}
            </Main>

        )
    }
}



export default ArticleMain;
