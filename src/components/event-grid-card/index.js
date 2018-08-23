import React, {Component} from 'react';
import styles from './style.module.css';

export default class EventGridCard extends Component{

    render(){
        return(
            <div className={styles["event"]}>
               <div className={styles["picture"]}>
                   <img src="http://excelmec.org/static/images/third-eye-photography.png" width="700" height="557" />
                </div>
                <h2>{this.props.details.eventName}</h2>
                <div className={styles["info"]}>
                
                      {this.props.details.eventDescp}
                   
                </div>

            </div>
        )
    }

}