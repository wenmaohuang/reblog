
import React from "react";
// import styles from "./MainArticle.module.scss";
import { Main,Section,Head ,Time,P,Footer,Flex,Tag,TagSpan,Reader,Iconfont,ReaderSpan} from "./styled"

class ArticleMain extends React.Component {
    constructor(props) {
        super(props);
        this.item = 'item'
    }

    handleArticleList(item) {

    }

    render() {
        return (
            <Main>
                <Section>
                    <Head>
                        <h5>
                            <span style={{color: 'blue'}}>type</span>
                            <a model="item.title" value="item.title" ref="title">title</a>
                        </h5>
                        <Time>
                            <P>day</P>
                            <div>
                                <span style={{padding: '0 5px'}}>month</span>
                                <span style={{padding: '0 5px'}}>year</span>
                            </div>
                        </Time>
                    </Head>
                    <div className="content">
                        <router-link className='img' to="/content">
                            <img src="" onClick={this.handleArticleList(this.item)} />
                        </router-link>
                        <router-link className='p' to="/content">
                            <p v-html="item.content" onClick={this.handleArticleList(this.item)}></p>
                        </router-link>
                    </div>
                    <Footer>
                        <Flex>
                            <Tag>
                                <TagSpan>tag</TagSpan>
                            </Tag>
                            <Reader>
                                <Iconfont className="iconfont icon-yuedu"></Iconfont>
                                <ReaderSpan>readaccount</ReaderSpan>

                            </Reader>
                        </Flex>
                    </Footer>
                </Section>
            </Main>

        )
    }
}
export default ArticleMain;
