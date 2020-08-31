import styled from 'styled-components'
const Main = styled.div
`
width:960px;
`
const Section = styled.section
`
position: relative;
box-sizing: border-box;
height: 450px;
width: 100%;
margin-bottom: 20px;
padding-left:20px;
background-color: #fff;
`
const Head = styled.div
`
display: flex;
justify-content: space-between;
font-size: 16px;
padding: 5px;
`
const H5 = styled.h5`
width: 100%;
padding: 10px 0;
border-bottom: 1px solid #ddd;
`
const Time = styled.div
`
display: flex;
width: 120px;
flex-direction: column;
text-align: center;
`
const P = styled.p
`
position: relative;
color: green;
font-size: 25px;
margin: 0;
`

const Footer =  styled.div
`
position: absolute;
width: 90%;
bottom: 10px;
`
const Flex = styled.div
`
display: flex;
justify-content: space-between;
`
const Tag = styled.h5
`
width: 100%;
border-top: 1px solid #ddd;
`
const TagSpan = styled.span
`
display: inline-block;
padding: 10px 0;
box-sizing: border-box;
`
const Reader = styled.div
`
display:flex;
flex-direction: column;
`

const Iconfont = styled.span
`
width: 20px;
text-align: center;
font-size: 25px;
`
const ReaderSpan = styled.span
`
display: inline-block;
text-align: center;
box-sizing: border-box;
`

export { Main, Section, Head ,Time,P,Footer,Flex,Tag,TagSpan,Reader,Iconfont,ReaderSpan}