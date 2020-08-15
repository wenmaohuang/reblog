
import React from "react";
import styles from "./SearchInfo.module.scss";

class SearchInfo extends React.Component {
    constructor(props) {
        super(props);
    }
   
    handleFetch = () => {
        console.log(this.textInput.value,'%(');
        fetch("https://test.fyyd.vip:3102/search?word=" + this.textInput.value)
                .then(res => res.json())
                .then(msg => {
                    this.jsonArr = msg;
                    console.log(this.jsonArr,'%*');
                });
    }

    render() {
        console.log(this.refs.textInput, '%-');

        return (
            <div className={styles.main} style={{ display: 'flex', justifyContent: 'center' }}>
                <input onInput={this.handleFetch} autoFocus ref={(input) => { this.textInput = input; }} className={styles.handleFocus}
                    style={{ position: 'absolute', top: '20%', borderRadius: '10px',fontSize:'20px',textIndent:'0.5em', border: '1px solid #000', color: '#000', width: '400px', height: '45px' }}></input>
            </div>
        )
    }
}
export default SearchInfo;
