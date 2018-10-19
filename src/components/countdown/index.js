import React, { Component } from 'react';
import styles from './style.module.css';

class Countdown extends Component{
    constructor(props){
        super(props)
        
        var dif = this.props.date - (new Date()).getTime()
        var ms = dif/1000;
        var secs = Math.floor(ms%60);
        ms = ms/60;
        var mins = Math.floor(ms%60);
        ms = ms/60;
        var hours = Math.floor(ms%24);
        ms = ms/24;
        var days = Math.floor(ms)
        this.state = { 
            days : days,
            hours : hours,
            mins : mins,
            secs : secs
        }

        setInterval(this.updateTime.bind(this), 1000)
        // console.log(this.props.date, new Date())
    }

    updateTime = () => {
        var dif = this.props.date - (new Date()).getTime()
        var ms = dif/1000;
        var secs = Math.floor(ms%60);
        ms = ms/60;
        var mins = Math.floor(ms%60);
        ms = ms/60;
        var hours = Math.floor(ms%24);
        ms = ms/24;
        var days = Math.floor(ms)
        this.setState({ 
            days : days,
            hours : hours,
            mins : mins,
            secs : secs
        })
    }

    render(){
        // console.log(this.state.days, this.state.hours, this.state.mins, this.state.secs)
        return (
            <div className={styles["container"]}>
                <div className={styles["value-container"]}>
                    <div className={styles["value"]}>{this.state.days}</div>
                    <div className={styles["metric"]}>Days</div>
                </div>
                <div className={styles["value-container"]}>
                    <div className={styles["value"]}>{this.state.hours}</div>
                    <div className={styles["metric"]}>Hours</div>
                </div>
                <div className={styles["value-container"]}>
                    <div className={styles["value"]}>{this.state.mins}</div>
                    <div className={styles["metric"]}>Mins</div>
                </div>
                <div className={styles["value-container"]}>
                    <div className={styles["value"]}>{this.state.secs}</div>
                    <div className={styles["metric"]}>Secs</div>
                </div>
                <div className={styles["dates"]}>October 2<sup>nd</sup>, 3<sup>rd</sup> and 4<sup>th</sup></div>
            </div>
        )
    }
}

export default Countdown