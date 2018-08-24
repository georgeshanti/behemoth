import React, { Component } from 'react';
import styles from './style.module.css';
import { Route, Link } from 'react-router-dom'

export default class EventCard extends Component{
    render(){
        return(
            <div className={styles["container"]}>
            <div id='contents-close' className={styles["btn-close"]}><Link to={"/events"}><img  alt='' src={require('../../img/close.png')}/></Link></div>
               <div className={styles["sections"]}>
                
                    <div className={styles["section1"]}>
                    <h1>HackForTomorrow</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida erat sit amet quam fringilla fermentum. In congue leo eu lacinia consectetur. Sed tincidunt, mauris tincidunt rutrum venenatis, ligula sapien dignissim sapien, in finibus sem urna sit amet elit. Nam accumsan eu purus eget lacinia. In sagittis tellus quis risus vulputate, sit amet dapibus ante dictum. Donec dui nulla, condimentum eu sagittis gravida, luctus at eros. Phasellus porta, est et bibendum imperdiet, sem urna venenatis leo, non convallis metus ex porttitor libero. Etiam sed feugiat enim. Aliquam auctor nisi velit. Donec vestibulum viverra orci, eu molestie nunc finibus nec</p>
                    </div>
                    
                    <div className={styles["section2"]}>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                        <img src="https://placeimg.com/640/480/any"/>
                    </div>
               </div>
            </div>
        )
    }
}