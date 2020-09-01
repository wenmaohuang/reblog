const process = require("process");
const fs = require("fs");
const path = require("path");

// console.log("hello");
// console.log(process.mainModule.path);
const name = process.argv[2];
// const rootPath = process.env.INIT_CWD;
const rootPath = process.mainModule.path;
fs.mkdirSync(path.join(rootPath, `/${name}`));

const jsxContent1 = `
import React from "react";

class ${name} extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
            </div>
        )
    }   
}
export default ${name};
`
// const jsxContent2 = `
// import ${name} from './${name}'
// export default ${name}
// `

// const scssContent = `
// .main{
//
// }
// `
const styledContent = `

`


fs.writeFileSync(path.join(rootPath, `/${name}/index.jsx`), jsxContent1);
// fs.writeFileSync(path.join(rootPath,`/${name}/index.jsx`),jsxContent2)
// fs.writeFileSync(path.join(rootPath,`/${name}/${name}.module.scss`),scssContent);
fs.writeFileSync(path.join(rootPath, `/${name}/styled.js`), styledContent);

console.log(`create file ${name} success`);

