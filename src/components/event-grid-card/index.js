import React, {Component} from 'react';
import styles from './style.module.css';

export default class EventGridCard extends Component{

    render(){
        return(
            <div className={styles["event"]}>
               <div className={styles["picture"]}>
                   <img src="https://placeimg.com/640/480/tech"/>
                </div>
                <h2>{this.props.details.eventName}</h2>
                <p className={styles["info"]}>
                
                      {this.props.details.eventDescp}
                   
                </p>

            </div>
        )
    }

}