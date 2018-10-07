import React, {Component} from 'react';
import styles from './style.module.css';


export default class ContactCard extends Component{

    render(){
        return(
            <div>
            <div className={styles["card"]}>
                <img src="https://placeimg.com/640/480/people"/>
                <div className={styles["bottom-left"]}>
                    {this.props.details.name}
                </div>
            </div>
            </div>
        )
    }
}