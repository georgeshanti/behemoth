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
                                <h1 id="title">Excel 2017</h1>
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