import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './style.module.css';
import ReactDOM from 'react-dom';

class EventGridCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacity: 0,
            scale: 0,
            color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)            
        }
    }

    componentDidMount(){
        var comp = this
        setTimeout(function(){
            comp.setState({
                opacity: 1,
                scale: 1
            })
            }
        ,this.props.delay);
    }

    render(){
        return (
            <div class={styles['event-grid-item']} style={{ background: this.state.color, opacity: this.state.opacity, transform: "scale(" + this.state.scale + ")"}}>
                <img class={styles['event-grid-img']} src="http://excelmec.org/static/images/third-eye-photography.png" />
                <div class={styles['event-grid-overlay']} >
                    <span class={styles['event-title']}>Lord of Code</span>
                    <span class={styles['event-category']}>Computer Science</span>
                </div>
            </div>
        )
    }
}

export default EventGridCard