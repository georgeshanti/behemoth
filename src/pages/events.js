import React, { Component } from 'react'
import {Route} from 'react-router-dom'

// import AuroraBox from '../components/aurora-box'

// locally scoped css
import styles from './events.module.css';

import medicineImg from '../img/becon-bg.jpg'

export default class Events extends Component{
    render(){
        return (
            <div className={styles['events-container']}>
                <div className={styles['overlay']}/>
                <img src={medicineImg} className={styles['bg-img']}/>
                <div className={styles['events-text-container']}>
                    <h1 className={styles['event-title']}>Becon 2018</h1>
                    <div className={styles['event-info']}>
                        <div className={styles['event-date']}>
                            14th Jun 2018 <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className={styles['event-venue']}>
                            <i className="fas fa-map-marker"></i> Some place
                        </div>
                    </div>
                    <p className={styles['event-short-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique lobortis metus, in cursus neque venenatis a. In hac habitasse platea dictumst. Donec metus lacus, posuere id auctor vel, pharetra vitae nisl.</p>
                </div>
            </div>
        )
    }
}