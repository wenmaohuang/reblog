
import React from "react";
import styles from "./SearchInfo.module.scss";
import Media from 'react-media';

class SearchInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
        }

    }

    handleFetch = () => {
        fetch("http://localhost:3001/search?word=" + this.textInput.value)
            .then(res => res.json())
            .then(msg => {
                this.setState({

                    result: msg.map((item, index) => {
                        return (

                            <li key={index} style={{ listStyleType: 'none', margin: '5px', fontSize: '20px' }}>
                                <a href={'https://www.baidu.com/s?wd=' + item} target="_blank">{item}</a>
                            </li>
                        )
                    }
                    )
                })
                console.log(this.jsonArr, '%*');
            });
    }
    handleSarch = (e) => {
        // e.preventDefault()

        if (e.keyCode === 13) {
            console.log('^(');

            function setStore(data) {
                const list = JSON.parse(localStorage.getItem("list")) || [];
                list.push(data);
                if (list.length > 8) {
                    list.shift();
                }
                localStorage.setItem("list", JSON.stringify(list));
            }
            setStore(this.textInput.value);

            window.location.href = "https://www.baidu.com/s?wd=" + this.textInput.value;
        }
    }
    handleFocus = () => {
        this.setState({

            result: JSON.parse(localStorage.getItem("list")).map((item, index) => {
                return (

                    <li key={index}
                        style={{ listStyleType: 'none', margin: '5px', fontSize: '20px' }}>
                        <a href={'https://www.baidu.com/s?wd=' + item} target="_blank">{item}</a>
                    </li>
                )
            }
            )
        })
    }

    render() {

        return (

            <Media queries={{
                small: "(max-width: 499px)",
                // medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 500px)"
            }}>
                {matches => (

                    <div>
                        {matches.small &&
                            <div className={styles.main}
                                style={{ position: 'absolute', backgroundColor: 'transparent', width: '100%', margin: '200px auto', flexDirection: 'column', display: 'flex' }}>
                                <div className="input"
                                    style={{ display: 'flex', margin: '0 auto' }}>
                                    <input onFocus={this.handleFocus} onKeyUp={this.handleSarch} onInput={this.handleFetch} autoFocus ref={(input) => { this.textInput = input; }} className={styles.handleFocus}
                                        style={{ borderRadius: '10px 0 0 10px', boxSizing: 'border-box', fontSize: '20px', textIndent: '0.5em', border: '1px solid #000', color: '#000', width: '300px', height: '50px' }}></input>
                                    <button
                                        style={{ width: '80px', height: '50px', borderRadius: '0 10px 10px 0', boxSizing: 'border-box', border: '1px solid #000' }}
                                    >搜索</button>

                                </div>
                                <ul
                                    style={{ backgroundColor: '#fff', width: '380px', margin: '10px auto', borderRadius: '10px' }}>
                                    {this.state.result}
                                </ul>

                            </div>
                        }
                        {/* {matches.medium && <p>I am medium!</p>} */}
                        {matches.large &&
                            <div className={styles.main}
                                style={{ position: 'absolute', backgroundColor: 'transparent', width: '100%', margin: '200px auto', flexDirection: 'column', display: 'flex' }}>
                                <div className="input"
                                    style={{ display: 'flex', margin: '0 auto' }}>
                                    <input onFocus={this.handleFocus} onKeyUp={this.handleSarch} onInput={this.handleFetch} autoFocus ref={(input) => { this.textInput = input; }} className={styles.handleFocus}
                                        style={{ borderRadius: '10px 0 0 10px', boxSizing: 'border-box', fontSize: '20px', textIndent: '0.5em', border: '1px solid #000', color: '#000', width: '400px', height: '50px' }}></input>
                                    <button
                                        style={{ width: '80px', height: '50px', borderRadius: '0 10px 10px 0', boxSizing: 'border-box', border: '1px solid #000' }}
                                    >搜索</button>

                                </div>
                                <ul
                                    style={{ backgroundColor: '#fff', width: '480px', margin: '10px auto', borderRadius: '10px' }}>
                                    {this.state.result}
                                </ul>

                            </div>
                        }
                    </div>
                )}
            </Media>

        )
    }
}
export default SearchInfo;
