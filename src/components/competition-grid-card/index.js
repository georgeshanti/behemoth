import React, { Component } from 'react';
import styles from './style.module.css';

class CompetitionGridCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacity: 0,
            scale: 0,
            color: ''            
        }
        if(this.props.details.color)
            this.setState({color: this.props.details.color})
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
            <div className={styles['event-grid-item']} style={{ background: this.state.color, opacity: this.state.opacity, transform: "scale(" + this.state.scale + ")"}}>
                <img alt={this.props.details.name} className={styles['event-grid-img']} src={this.props.details.img} />
                <div className={styles['event-grid-overlay']} >
                    <span className={styles['event-title']}>{this.props.details.name}</span>
                    <span className={styles['event-category']}>{this.props.details.category}</span>
                </div>
            </div>
        )
    }
}

export default CompetitionGridCard