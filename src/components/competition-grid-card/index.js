import React, { Component } from 'react';
import styles from './style.module.css';

class CompetitionGridCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            hidden: true,
            color: ''            
        }
        if(this.props.details.color)
            this.setState({color: this.props.details.color})
    }

    componentDidMount(){
        var comp = this
        setTimeout(function(){
            comp.setState({hidden: false})
            }
        ,this.props.delay);
    }

    render(){
        var classN = this.state.hidden?" "+styles["hidden"]:""
        return (
            <div className={styles['event-grid-item'] + classN} style={{ background: this.props.details.color, opacity: this.state.opacity, transform: "scale(" + this.state.scale + ")"}}>
                <img alt={this.props.details.name} className={styles['event-grid-img']} src={this.props.details.img} />
                <div className={styles['event-grid-overlay']} >
                    <span className={styles['event-title']}>{this.props.details.name}</span>
                    <span className={styles['event-category']}>{this.props.details.department} - {this.props.details.category}</span>
                </div>
            </div>
        )
    }
}

export default CompetitionGridCard