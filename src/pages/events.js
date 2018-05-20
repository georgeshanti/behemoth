import React, { Component } from 'react'

// locally scoped css
import styles from './events.module.css';

export default class Events extends Component{
    render(){
        console.log(styles)
        return (
            <h1 className={styles['app-font']}>Events</h1>
        )
    }
}