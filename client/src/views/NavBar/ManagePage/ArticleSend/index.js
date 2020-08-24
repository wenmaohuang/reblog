/**
 * @file Editer main file
 * @author Marx
 */

import './index.css';
import React, { Component } from 'react';
import { Editor, EditorState,ContentState, RichUtils, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Menu, Divider, Select, Form, Layout, Input, Button,message } from 'antd';

import api from '../../../../api/index'
import UploadBar from '../../../../components/UploadBar'
const postArticleSend = api.postArticleSend

const { Sider, Content } = Layout;
const { Option } = Select;


  const success = () => {
    message.success('This is a success message');
  };
  
  const error = () => {
    message.error('This is an error message');
  };



class ArticleSend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            styleMap: {
                'RED': {
                    color: 'red',
                },
            },
            formData: {
                title: "",
                type: "",
                tag: "",
                name: "",
                surface: "http://localhost:3001",
                content: "",
                comment: "",
                readcount: 0,
                year: "",
                month: "",
                day: "",
            },
        };
        this.focus = () => this.refs.editor.focus();
        this.onChange = editorState => {
            this.setState({ editorState });
            // console.log(convertToRaw(this.state.editorState.getCurrentContent()),'_#!!!!!');
        console.log(draftToHtml(this.state.editorState.getCurrentContent()),'_@');

        };
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    }
    toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }
  



    handleSummit = () => {
        // console.log(data,'*$');
        // e.preventDefault()

        // 　this.setState({
        //     　　　　showEditorText:true
        //     　　　　})
            
        
        this.state.formData.year = new Date().getFullYear();
        this.state.formData.month = new Date().getMonth() + 1;
        this.state.formData.day = new Date().getDate();
        this.state.formData.title = this.input.input.value
        this.state.formData.type = this.selectA.props.value
        this.state.formData.tag = this.selectB.props.value
        console.log( this.refs,'(@');
        this.state.formData.content = convertToRaw(this.state.editorState.getCurrentContent())


        // convertToRaw(this.state.editorState,'((&')

        console.log(convertToRaw(this.state.editorState.getCurrentContent()),'_!')


        console.log(this.state, '*#');
        postArticleSend({
            title: this.state.formData.title,
            type: this.state.formData.type,
            tag: this.state.formData.tag,
            name: this.state.formData.name,
            surface: this.state.formData.surface,
            content: this.state.formData.content,
            comment: this.state.formData.comment,
            readcount: this.state.formData.readcount,
            year: this.state.formData.year,
            month: this.state.formData.month,
            day: this.state.formData.day,
        }).then((req, res) => {
            console.log(req, res, '***@');
            console.log('上传成功');
            success()
            // setTimeout(() => {
            //     this.fullscreenLoading = false;
            //     window.location.reload();
            // }, 300000)
        }).catch(() => {
            error()
            console.log('上传失败');
        })
    }

    // handleSummit=()=>{
    //     console.log(this,'(!');
    // }
    componentDidUpdate(){

    }
    componentDidMount(){
        console.log(draftToHtml(this.state.editorState.getCurrentContent()),'_@');
        
    }
    
    render() {
        
        console.log(this, '&!');
        return (
            <Form className="basic"
                style={{ display: 'flex', margin: '10px 0', flexDirection: 'column', alignItems: 'center', margin: '0 50px', width: '100%' }}
            >
                <Form.Item name="标题" label="标题" rules={[{ required: true, },]}
                    style={{ width: '95%', margin: '10px' }}
                >
                    <Input value={this.state.formData.title} ref={(input) => { this.input = input}} placeholder="Basic usage"
                    />
                </Form.Item>
                <Form.Item name="分类" label="分类" rules={[{ required: true, },]}
                    style={{ width: '95%', margin: '10px' }}

                >
                    <Select value={this.state.formData.type} ref={(selectA) => { this.selectA = selectA}}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                             </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="标签" label="标签" rules={[{ required: true, },]}
                    style={{ width: '95%', margin: '10px' }}

                >
                    <Select value={this.state.formData.tag} ref={(selectB) => { this.selectB = selectB}}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                             </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>
                <Layout
                    style={{ display: 'flex', width: '100%', background: '#fff' }}
                >
                    <Content
                        style={{ margin: '24px', background: '#fff', minHeight: 380 }}
                    >
                        <InlineStyleControls
                            editorState={this.state.editorState}
                            onToggle={this.toggleInlineStyle}
                        />
                        <div  onMouseEnter={this.focus} onClick={this.focus} className="editor" 
                            style={{ height: '100%', padding: '10px' }}
                        >
                            <Editor 
                                customStyleMap={this.state.styleMap}
                                editorState={this.state.editorState}
                                onChange={this.onChange}
                                ref="editor"
                                />
                        </div>
                        <UploadBar></UploadBar>
                        <Button onClick={this.handleSummit} type="submit" type="primary"
                            style={{ margin: '15px 0' }}
                        >Primary Button</Button>
                    </Content>
                </Layout>
            </Form>


        )
    }
}

var INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' },
    { label: 'Red', style: 'RED' },
];
const InlineStyleControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map(type =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }
    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }
        return (
            <span className={className} onMouseDown={this.onToggle}>
                {this.props.label}
            </span>
        );
    }
}

export default ArticleSend