import React, {Component} from 'react';
import styles from './style.module.css';


export default class ContactCard extends Component{

    render(){
        return(
            <div>
            <div className={styles["card"]}>
                <img alt={this.props.details.name} src={this.props.details.img}/>
                <div className={styles["card-info"]}>
                    <div className={styles["descp"]}>
                        {this.props.details.designation} <br />
                    </div>
                    {this.props.details.name}  <br />
                    <div className={styles["contact-info"]}>
                    <img  alt='email' src={require('../../img/message-closed-envelope.png')}/> <a href={"mailto:" + this.props.details.email}>{this.props.details.email}</a> <br />
                    <img  alt='phone' src={require('../../img/phone-receiver.png')}/> {this.props.details.phone}  <br />
                    </div>
                </div>
                <div className={styles["bottom-right"]}>
                    <a href={this.props.details.github} target="_black"><img  alt='github' src={require('../../img/github-logo.png')}/></a>
                    &nbsp;
                    <a href={this.props.details.linkedin} target="_black"><img  alt='linkedin' src={require('../../img/linkedin-logo.png')}/></a>
                </div>
                <div className={styles["gradient-overlay"]}></div>
            </div>
            </div>
        )
    }
}