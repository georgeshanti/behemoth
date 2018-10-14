import React, { Component } from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class FindOut extends Component{
   
    constructor(props){
        super(props)
        this.colors=['#48413F','#B29F60','#294E8B','#229DEC', '#5E3D28']
        this.divstyle= {
            backgroundColor: '#48413F',
        };

    }
    
    render(){

        return(
            <div className={styles["overlay"]}>
                <div className={styles["container-border"]}>
                    <div id='contents-close' className={styles["btn-close"]}><Link to={"/"}><img  alt='' src={require('../../img/close.png')}/></Link></div>
                    <div className={styles["container"]} style={this.divstyle}>
                    <div className={styles["sections"]}>
                        
                            <div  className={styles["section1"]}>
                                <h1 id="title">About Us</h1>
                                <p id="content">
                                    Excel, the nation’s second and South India’s first ever fest of its kind started in 2001 by the students of Govt. Model Engineering College with a motto, Inspire, Innovate, Engineer. Over the years, Excel has grown exponentially, consistently playing host to some of the most talented students, the most illustrious speakers and the most reputed companies. Now gearing towards its 19th edition, Excel continues to excite the participants with its wide array of technical and non-technical events and with a promise to live upto its motto. What sets Excel apart is the drive towards delivering excellence. The fest is renowned for its quality, dynamism and active participation.
                                </p>
                                <p>
                                    Excel 2018 incorporates a wide variety of technical, managerial and general events which includes both online and onsite competitions, workshops, summits, hackathons, exhibitions and so on.
                                </p>
                                <p>
                                    With the firm theme of ‘Bridging Realms’, Excel 2018 is all set to unite man and machine enabling college students to bring together ideation and creation prepping them for the industry.
                                </p>
                                <h1 id="title">Model Engineering College</h1>
                                <p id="content">
                                    Govt. Model Engineering College through its dedication to excellence over the past 28 years has managed to carve a unique identity for itself as one of the best engineering colleges in South India. The college has been actively involved in bridging the technological divide by promoting social upliftment through technology. Be it electrifying remote hamlets of the state or promoting renewable energy by building a 30KW solar power plant, MEC has managed to outdo itself every single time through its culture of innovation. 
                                </p>
                                <h1 id="title">Legacy</h1>
                                <p id="content">
                                    This is the description.
                                </p>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}