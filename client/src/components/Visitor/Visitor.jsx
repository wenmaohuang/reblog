
import React from "react";
import styles from "./Visitor.module.scss";

class Visitor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.visitor}>

                    <h3>最近访客</h3>
                    <ul>
                        <li
                            v-for="(item,index) in visitor"
                            
                        >
                        </li>
                    </ul>
            </div>
        )
    }
}
export default Visitor;
