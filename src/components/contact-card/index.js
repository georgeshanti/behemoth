import React, {Component} from 'react';
import styles from './style.module.css';


export default class ContactCard extends Component{

    render(){
        return(
            <div>
            <div className={styles["card"]}>
                <img src={this.props.details.img}/>
                <div className={styles["card-info"]}>
                    {this.props.details.descp} <br />
                    {this.props.details.name}  <br />
                    {this.props.details.email} <br />
                    {this.props.details.phno}  <br />
                </div>
                <div className={styles["gradient-overlay"]}></div>
            </div>
            </div>
        )
    }
}