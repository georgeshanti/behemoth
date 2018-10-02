import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import styles from './style.module.css';
import ReactDOM from 'react-dom';

class CompetitionGridCard extends Component{
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
                <img class={styles['event-grid-img']} src={this.props.details.img} />
                <div class={styles['event-grid-overlay']} >
                    <span class={styles['event-title']}>{this.props.details.name}</span>
                    <span class={styles['event-category']}>{this.props.details.category}</span>
                </div>
            </div>
        )
    }
}

export default CompetitionGridCard