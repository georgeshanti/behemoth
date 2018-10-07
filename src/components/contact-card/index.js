import React, {Component} from 'react';
import styles from './style.module.css';


export default class ContactCard extends Component{

    render(){
        return(
            <div>
            <div className={styles["card"]}>
                <img src={this.props.details.img}/>
                <div className={styles["card-info"]}>
                    <div className={styles["descp"]}>
                        {this.props.details.descp} <br />
                    </div>
                    {this.props.details.name}  <br />
                    <div className={styles["contact-info"]}>
                    <img  alt='' src={require('../../img/message-closed-envelope.png')}/> {this.props.details.email} <br />
                    <img  alt='' src={require('../../img/phone-receiver.png')}/> {this.props.details.phno}  <br />
                    </div>
                </div>
                <div className={styles["bottom-right"]}>
                    <img  alt='' src={require('../../img/github-logo.png')}/>
                    &nbsp;
                    <img  alt='' src={require('../../img/linkedin-logo.png')}/>
                </div>
                <div className={styles["gradient-overlay"]}></div>
            </div>
            </div>
        )
    }
}