import React, { Component } from 'react';
import styles from './style.module.css';

class CompetitionGridCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacity: 0,
            scale: 0,
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
        var contents=[]

        var y=this.props.details.contents
        var style
        for(var  i in y){
            if(i==y.length - 1)
                style={borderWidth: "0px"}
            else
                style={}
            var x=(
                    <div>
                        <div class={styles['schedule-sub-grid']} style={style}>
                            <div class={styles['schedule-time']}>{y[i].from}<br/>{y[i].to}</div>
                            <div class={styles['schedule-sub-title']}>
                                {y[i].title}
                                <div class={styles['schedule-sub-category']}>{y[i].category}
                                    <div class={styles['schedule-venue']}>{y[i].venue}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            contents.push(x)
        }

        return (
            <div class={styles['schedule-grid-item']} style={{  opacity: this.state.opacity, transform: "scale(" + this.state.scale + ")"}}>  
                <div class={styles['schedule-grid-overlay']} >
                    <span class={styles['schedule-title']}>Day {this.props.details.day}</span>
                    <div className={styles['contents-container']}>
                        {contents}
                    </div>
                </div>
            </div>
        );
    }
}

export default CompetitionGridCard